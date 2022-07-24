import { View, Text, Image, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Shadow } from "react-native-shadow-2";
import { DataContext } from "../../context/DataProvider";
import Button from "../Button/Button";
import { database } from "../../utils/Firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
export default function CardCarrito() {
  const value = useContext(DataContext);
  const carrito = value.carrito;
  const setCarrito = value.setCarrito
  const total = value.total;
  const stepCount = value.setCount;
  const itemCount = value.count
  const [product, setProduct] = useState([]);
 
  // const removeProductoAlert = (id, name) => {
  //   Alert.alert(`Eliminar ${name}`, "¿Quieres eliminar este producto?", [
  //     {
  //       text: "Cancel",
  //     },
  //     {
  //       text: "OK",
  //       onPress: () => {
  //         removeProducto(id);
  //         // firestore()
  //         //   .collection("productos")
  //         //   .doc(id)
  //         //   .delete()
  //         //   .then(() => {
  //         //     console.log("producto eliminado");
  //         //   });
  //         // removeProducto(id);
  //         // await updateDoc(productsRef, {
  //         //   id: deleteField(),
  //         //   img: deleteField(),
  //         //   marca: deleteField(),
  //         //   name: deleteField(),
  //         //   price: deleteField(),
  //         // });
  //       },
  //     },
  //   ]);
  // };
  const BuyProduct = () => {
    Alert.alert("Su compra ha sido realizada", "");
  };

  const deleteItem = async (item,key) =>{
    const itemRef = doc(database,'product',item)
    await deleteDoc(itemRef)
    carrito.forEach((item,index) => {
      if(item.key === key) {
        item.key = 1;
        carrito.splice(index,1)
        stepCount(itemCount - 1)
      }
    })
    setCarrito([...carrito]);
    setProduct([])
  }
  const getItems = async () =>{
    const collectionRef = collection(database, "product");
    const q = query(collectionRef);
    const result = await getDocs(q)
    
    const listItem = result.docs.map((doc) => ({...doc.data(),key:doc.id}))

    setProduct(listItem)
  }

  useEffect(() => {
    getItems()
  }, []);

  return (
    <>
      {product.length === 0 ? (
        <Text> Carrito Vacío </Text>
      ) : (
        <>
          {product.map((producto) => (
            <View style={styled.content} key={producto.id}>
              <Shadow distance={4} startColor={"#00000010"} radius={8}>
                <View style={styled.contentCard}>
                  <Image source={producto.img} style={styled.image} />
                  <View style={styled.contentText}>
                    <Text style={styled.txtNameShoes}> {producto.name} </Text>
                    <Text style={styled.textShoes}> C$ {producto.price} </Text>
                  </View>
                  <Text style={styled.icon}>
                    <Icon
                      name="trash"
                      color="#000"
                      size={30}
                      onPress={() =>
                        deleteItem(producto.key)
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          
          Total:
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "#A4A4A4",
          }}
        >
          
          C$ {total}
        </Text>
      </View>
      <Button nameBtn="Comprar" onPress={() => BuyProduct()} />
    </>
  );
}
