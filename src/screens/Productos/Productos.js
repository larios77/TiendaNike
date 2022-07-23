import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import CardProducts from "../../components/CardProduct/CardProducts";
import imgProducto from "../../../assets/inicio.jpg";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useLayoutEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { DataContext } from "../../context/DataProvider";
import Footer from "../../components/Footer/footer";
import { styled } from "./Styles";

const Productos = ({ navigation }) => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [carrito] = value.carrito;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Icon name="arrow-left" color="#000" />,
      headerRight: () => (
        <View>
          <Icon
            name="shopping-cart"
            color="#fff"
            size={25}
            style={{ marginRight: 20, zIndex: 1 }}
            onPress={() => navigation.navigate("Carrito")}
          />
          <View style={styled.counter}>
            <Text style={styled.textCounter}>{carrito.length}</Text>
          </View>
        </View>
      ),
    });
  }, [navigation, carrito]);
  return (
    <SafeAreaView style={styled.safeAreaView}>
      <ScrollView style={styled.container}>
        <Text style={styled.title}>Productos</Text>
        <View style={{ alignItems: "center" }}>
          <Image source={imgProducto} style={styled.image} />
        </View>
        <View style={styled.flatList}>
          {productos.map((item) => (
            <CardProducts
              key={item.id}
              id={item.id}
              imgProducts={item.img}
              brand={item.marca}
              shoeName={item.name}
              price={item.price}
            />
          ))}
        </View>
        <Footer />
        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Productos;
