// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOftPvRbR6mgTH6k1iT1-lH3MaF7UJmvM",
  authDomain: "todo-list-43a03.firebaseapp.com",
  databaseURL: "https://todo-list-43a03-default-rtdb.firebaseio.com",
  projectId: "todo-list-43a03",
  storageBucket: "todo-list-43a03.appspot.com",
  messagingSenderId: "1027514943941",
  appId: "1:1027514943941:web:cd53c1c52b59a91f7723ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();