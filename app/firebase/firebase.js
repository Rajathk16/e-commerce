// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq8WO9B5Iy-giLc6a16W6Akgi2CqRWaF8",
  authDomain: "ecommerce-afb30.firebaseapp.com",
  projectId: "ecommerce-afb30",
  storageBucket: "ecommerce-afb30.firebasestorage.app",
  messagingSenderId: "230818048220",
  appId: "1:230818048220:web:b4c33c5cb2edf6d1746c19",
  measurementId: "G-WFBZ231XPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;