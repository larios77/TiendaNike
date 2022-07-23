import { View, Text, Image, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Shadow } from "react-native-shadow-2";
import { DataContext } from "../../context/DataProvider";
import Button from "../Button/Button";
import { database } from "../../utils/Firebase";
// import {
//   collection,
//   addDoc,
//   deleteDoc,
//   doc,
//   updateDoc,
//   deleteField,
//   getDocs,
//   delete,
//   Firestore,
// } from "firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import { QuerySnapshot } from "firebase/firestore";

export default function CardCarrito() {
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const [dataCarrito, setDataCarrito] = useState([]);
  //obtener los datos que están en la base de datos de firebase
  // useEffect(() => {
  //   const obtenerDatos = async () => {
  //     const datos = await getDocs(collection(database, "productos"));
  //     datos.forEach((documento) => {
  //       console.log(documento.data());
  //     });
  //   };
  //   obtenerDatos();
  // }, []);
  const loadingData = () => {
    const suscriber = firestore()
      .collection("productos")
      .onSnapshot((QuerySnapshot) => {
        const product = [];
        QuerySnapshot.forEach((documentSnapshot) => {
          product.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setDataCarrito(suscriber);
      });
    return suscriber;
  };
  useEffect(() => {
    loadingData();
  }, []);
  const removeProducto = (id) => {
    carrito.forEach((item, index) => {
      if (item.id === id) {
        item.cantidad = 1;
        carrito.splice(index, 1);
      }
    });
    setCarrito([...carrito]);
  };
  const removeProductoAlert = (id, name) => {
    Alert.alert(`Eliminar ${name}`, "¿Quieres eliminar este producto?", [
      {
        text: "Cancel",
      },
      {
        text: "OK",
        onPress: () => {
          firestore()
            .collection("productos")
            .doc(id)
            .delete()
            .then(() => {
              console.log("producto eliminado");
            });
          // removeProducto(id);
          // await updateDoc(productsRef, {
          //   id: deleteField(),
          //   img: deleteField(),
          //   marca: deleteField(),
          //   name: deleteField(),
          //   price: deleteField(),
          // });
        },
      },
    ]);
  };
  const BuyProduct = async () => {
    await addDoc(collection(database, "productos"), {
      ...carrito,
    });
    Alert.alert("Su compra ha sido realizada", "");
  };
  return (
    <>
      {dataCarrito.length === 0 ? (
        <Text>Carrito Vacío</Text>
      ) : (
        <>
          {dataCarrito.map((producto) => (
            <View style={styled.content} key={producto.id}>
              <Shadow distance={4} startColor={"#00000010"} radius={8}>
                <View style={styled.contentCard}>
                  <Image source={producto.img} style={styled.image} />
                  <View style={styled.contentText}>
                    <Text style={styled.txtNameShoes}>{producto.name}</Text>
                    <Text style={styled.textShoes}>C$ {producto.price}</Text>
                  </View>
                  <Text style={styled.icon}>
                    <Icon
                      name="trash"
                      color="#000"
                      size={30}
                      onPress={() =>
                        removeProductoAlert(producto.id, producto.name)
                      }
                    />
                  </Text>
                </View>
              </Shadow>
            </View>
          ))}
        </>
      )}
      <View style={styled.contentTotal}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total : </Text>
        <Text style={{ fontSize: 20, color: "#A4A4A4" }}>C$ {total}</Text>
      </View>
      <Button nameBtn="Comprar" onPress={() => BuyProduct()} />
    </>
  );
}
