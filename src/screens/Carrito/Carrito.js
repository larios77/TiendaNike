import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import CardCarrito from "../../components/Carrito/cardCarrito";
import { styled } from "./Styles";

const Carrito = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={25}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styled.safeAreaView}>
      <View style={styled.container}>
        <Text style={styled.title}>Su carrito</Text>
        <ScrollView>
          <CardCarrito />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Carrito;
