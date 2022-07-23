import React, { useState, createContext, useEffect } from "react";
import { productoItems } from "../common/ProductosItem";
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const producto = productoItems.items;
    if (producto) {
      setProductos(producto);
    } else {
      setProductos([]);
    }
  }, []);
  useEffect(() => {
    const getTotal = () => {
      const rest = carrito.reduce((prev, item) => {
        return prev + item.price;
      }, 0);
      setTotal(rest);
    };
    getTotal();
  }, [carrito]);
  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      console.log("El producto se ha añadido al carrito");
    }
  };

  const value = {
    productos: [productos],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
