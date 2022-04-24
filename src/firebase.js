// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjYCYnteMihfIe-kCvO3YcX0PtzgSff54",
  authDomain: "crud-registro-bp.firebaseapp.com",
  projectId: "crud-registro-bp",
  storageBucket: "crud-registro-bp.appspot.com",
  messagingSenderId: "625260886696",
  appId: "1:625260886696:web:98db02a6fae9e017c2609d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}