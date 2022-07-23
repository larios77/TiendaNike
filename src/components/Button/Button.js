import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "./styles";

const Button = ({ nameBtn, onPress = () => {} }) => {
  return (
    <View style={styled.containerBtn}>
      <TouchableOpacity style={styled.buttonCard} onPress={onPress}>
        <Text style={styled.txtButton}>{nameBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
