import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyCTKxq25tMLnArN9WuwB1knaq50HgbjA70",
  authDomain: "prueba-f5ab4.firebaseapp.com",
  projectId: "prueba-f5ab4",
  storageBucket: "prueba-f5ab4.appspot.com",
  messagingSenderId: "5320119455",
  appId: "1:5320119455:web:2cca55fadf73b8f388beaa",
  measurementId: "G-PFNY0FFYXM"
};

initializeApp(firebaseConfig);
export const database = getFirestore();
