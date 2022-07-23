import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styled } from "./styles";

export default function Footer() {
  return (
    <View style={styled.content}>
      <View style={styled.contentFooter}>
        <View>
          <Text style={styled.textNike}>Nike</Text>
          <Text style={styled.textFollow}>Siguenos</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="facebook"
              color="#fff"
              size={35}
              style={{ marginRight: 30 }}
            />
            <Icon name="instagram" color="#fff" size={35} />
          </View>
        </View>
        <View>
          <Text style={styled.links}>Blog</Text>
          <Text style={styled.links}>Eventos</Text>
          <Text style={styled.links}>Servicio al cliente</Text>
          <Text style={styled.links}>Preguntas frecuentes</Text>
          <Text style={styled.links}>Términos y condiciones</Text>
        </View>
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text style={styled.textFooter}>© 2022 Nike Nicaragua</Text>
        <Text style={styled.textDerechos}>Todos los derechos reservados</Text>
      </View>
    </View>
  );
}
