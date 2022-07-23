import { View, Image, Modal } from "react-native";
import LoaderImg from "../../../assets/Loader.png";
import React from "react";
import { styled } from "./Styles";

const SplashScreen = ({ isVisible }) => {
  return (
    <Modal visible={isVisible}>
      <View style={styled.content}>
        <Image source={LoaderImg} style={styled.image} />
      </View>
    </Modal>
  );
};

export default SplashScreen;
