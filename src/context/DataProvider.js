import React, { useState, createContext, useEffect } from "react";
import {collection,addDoc} from 'firebase/firestore'
import {database} from '../utils/Firebase'
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [carrito, setCarrito] = useState([]);
  const [item,setItem]=useState(0)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const rest = carrito.reduce((prev, item) => {
        return prev + item.price;
      }, 0);
      setTotal(rest);
    };
    getTotal();
  }, [carrito]);

  const addCarrito = async (data) => {
    try {
      
      if(Object.keys(data).length <= 0){
         throw String('Error')
      }

      await addDoc(collection(database,'product'),data)
      setCarrito([...carrito,data])
      setItem(item + 1)
    } catch (error) {
      alert(error.message)
    }
  };

  const value = {
    addCarrito: addCarrito,
    carrito:carrito,
    setCarrito:setCarrito,
    count:item,
    setCount:setItem,
    total:total,
    setTotal:setTotal
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
