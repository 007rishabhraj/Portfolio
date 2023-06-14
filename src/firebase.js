// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIQnQI-AiexuH3J-SilxDC_C02yn6CIB0",
  authDomain: "rishabh-portfolio-76a05.firebaseapp.com",
  projectId: "rishabh-portfolio-76a05",
  storageBucket: "rishabh-portfolio-76a05.appspot.com",
  messagingSenderId: "573219802230",
  appId: "1:573219802230:web:eab0428b67d42213dda357",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore();