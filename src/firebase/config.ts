// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBv4XOadXpVeb_af-zq8Kjv7hzPKtlVAUc",
    authDomain: "test-b524d.firebaseapp.com",
    projectId: "test-b524d",
    storageBucket: "test-b524d.appspot.com",
    messagingSenderId: "3590411024",
    appId: "1:3590411024:web:15cfbde20de5096eb68b95",
    measurementId: "G-VGVSYM4NHE"
  };
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
console.log(authentication);
export { firebase, authentication };