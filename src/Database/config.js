// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNRwMVdIa0Qk5qIYnpDybehXWK0yC4VpU",
  authDomain: "reactphotowall-3eb38.firebaseapp.com",
  databaseURL: "https://reactphotowall-3eb38-default-rtdb.firebaseio.com",
  projectId: "reactphotowall-3eb38",
  storageBucket: "reactphotowall-3eb38.appspot.com",
  messagingSenderId: "117482382711",
  appId: "1:117482382711:web:501706db7b8c54077a2d72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.database();

export {database}