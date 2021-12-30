// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-eRDyC3Pw7i4NF95z1T5-CbWY9w-EWZQ",
  authDomain: "insta-2-b1bb2.firebaseapp.com",
  projectId: "insta-2-b1bb2",
  storageBucket: "insta-2-b1bb2.appspot.com",
  messagingSenderId: "1022360926091",
  appId: "1:1022360926091:web:ea3ad2ea8e44fffebd618e",
  measurementId: "G-K2M8VKH4V4",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
