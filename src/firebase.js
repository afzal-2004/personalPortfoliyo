// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "portfoliyo-5cfff.firebaseapp.com",
  projectId: "portfoliyo-5cfff",
  storageBucket: "portfoliyo-5cfff.appspot.com",
  messagingSenderId: "636878121898",
  appId: "1:636878121898:web:c85d14bd4005782e1c19d3",
  measurementId: "G-EK6P62MPT1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);
