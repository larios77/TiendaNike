import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductosScreen from "../screens/Productos/Productos";
import Carritoscreen from "../screens/Carrito/Carrito";
import FormularioScreen from "../screens/Formulario/Formulario";
import SplashScreen from "../components/SplashScreen/SplashScreen";

const Stack = createStackNavigator();

export default function NavigationStack() {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen
          name="Formulario"
          component={FormularioScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#000",
            },
          }}
        />
        <Stack.Screen
          name="Productos"
          component={ProductosScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#000",
            },
          }}
        />
        <Stack.Screen
          name="Carrito"
          component={Carritoscreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#000",
            },
          }}
        />
      </Stack.Navigator>
      <SplashScreen isVisible={isLoader} />
    </>
  );
}
