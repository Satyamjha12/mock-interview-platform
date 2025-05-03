// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwaUvL2bgI-aYXOCNy0KZuh9QuG2dBSTc",
  authDomain: "prepwise-ae60f.firebaseapp.com",
  projectId: "prepwise-ae60f",
  storageBucket: "prepwise-ae60f.firebasestorage.app",
  messagingSenderId: "932395256347",
  appId: "1:932395256347:web:67ce91c60d4ea349cf86be",
  measurementId: "G-6X9Z803LLW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);