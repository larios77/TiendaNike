import { View, Text, Image } from "react-native";
import Button from "../Button/Button";
import { Shadow } from "react-native-shadow-2";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { styled } from "./style";

const CardProducts = ({ imgProducts, brand, shoeName, price, id }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  const addProduct = () => {

    const dataSent = {
      id: id,
      img: imgProducts,
      marca: brand,
      name: shoeName,
      price: price,
    }
    addCarrito(dataSent)
  }


  return (
    <View style={styled.containerCard}>
      <Shadow distance={4} startColor={"#00000010"} radius={6}>
        <View style={{ alignItems: "center" }}>
          <Image style={styled.imgShoes} source={imgProducts} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styled.textShoes}>{brand}</Text>
          <Text style={styled.txtNameShoes}>{shoeName}</Text>
          <Text style={styled.textShoes}>C$ {price}</Text>
        </View>
        <Button
          nameBtn="Añadir al carrito"
          id={id}
          onPress={addProduct}
        />
      </Shadow>
    </View>
  );
};

export default CardProducts;
