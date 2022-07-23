import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styled } from "./styles";
import { StatusBar } from "expo-status-bar";
import { Shadow } from "react-native-shadow-2";
import Icon from "react-native-vector-icons/FontAwesome5";
import Logo from "../../../assets/Logo.png";
import React, { useLayoutEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userEmail } from "../../services/userDB";
import { Link } from "@react-navigation/native";

const Formulario = ({ navigation }) => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().required("El email es obligatorio"),
    }),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { email } = formValue;

      if (email !== userEmail.email || email !== userEmail.email) {
        setError("El email no es válido");
      } else {
        navigation.navigate("Productos");
      }
    },
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Image source={Logo} style={styled.LogoImg} />,
    });
  }, [navigation]);

  return (
    <View style={styled.content}>
      <View style={{ marginVertical: 60 }}>
        <Text style={styled.title}>Tienda de zapatos</Text>
        <Text style={styled.nikeTitle}>Nike</Text>
      </View>
      <View style={styled.contentViewAlign}>
        <Shadow distance={4} startColor={"#00000010"} radius={8}>
          <View style={styled.contentShadow}>
            <View style={{ marginBottom: 20 }}>
              <Text style={styled.titleForm}>Registrate</Text>
              <Text style={styled.textForm}>
                para obtener un cupón de 15% de descuento en tu próxima compra
              </Text>
            </View>
            <View>
              <Text style={styled.label}>Email</Text>
              <TextInput
                placeholder="correo@gmail.com"
                style={styled.input}
                value={formik.values.email}
                onChangeText={(text) => formik.setFieldValue("email", text)}
              />
            </View>
          </View>
          <View style={styled.contentBtn}>
            <TouchableOpacity
              onPress={formik.handleSubmit}
              style={styled.button}
            >
              <Text style={styled.textButton}>Registrame</Text>
            </TouchableOpacity>
          </View>
        </Shadow>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ textAlign: "center", color: "red", marginTop: 10 }}>
          {formik.errors.email}
        </Text>
        <Text style={{ textAlign: "center", color: "red" }}>{error}</Text>
      </View>
      <View style={styled.contentRedes}>
        <Text style={styled.textRedes}>
          Siguenos en nuestras redes sociales
        </Text>
        <View style={styled.contentIcon}>
          <Icon name="facebook" color="#3C3C3C" size={35} />
          <Icon name="instagram" color="#3C3C3C" size={35} />
          <Icon name="twitter" color="#3C3C3C" size={35} />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Formulario;
