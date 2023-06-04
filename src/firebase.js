
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
const firebase = {
  apiKey: "AIzaSyDUVCGAKA_dImRQn4yi1sFJsCyVXhuDw6E",
  authDomain: "mezaveh-dea9a.firebaseapp.com",
  projectId: "mezaveh-dea9a",
  storageBucket: "mezaveh-dea9a.appspot.com",
  messagingSenderId: "981496863593",
  appId: "1:981496863593:web:d841f17a768faf0c183bf8",
  measurementId: "G-GS170W3WM0"
};

// Initialize Firebase app
const app = initializeApp(firebase);

// Get the authentication instance
export const auth = getAuth(app);

// Get the Firebase Realtime Database instance
export const database = getFirestore(app);

export default app;
