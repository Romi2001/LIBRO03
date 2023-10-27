// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import {getStorage, ref, uploadBytes} from "firebase/storage";
import {getFirestore, addDoc , collection, getDoc, query, where, setDoc, updateDoc} from "firebase/firestore";
import App from "../App";
const firebaseConfig = {
  apiKey: "AIzaSyCJvePpkoGVatLtUvrKHk2hkVaW7cNUPZc",
  authDomain: "proy-react-app07.firebaseapp.com",
  projectId: "proy-react-app07",
  storageBucket: "proy-react-app07.appspot.com",
  messagingSenderId: "776817543500",
  appId: "1:776817543500:web:30cd1929045fd21cb9e7e9",
  measurementId: "G-YR6BRLSXDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export const db = getFirestore(app)
const storage = getStorage(app);