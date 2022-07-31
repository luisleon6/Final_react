//import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgJPgaGYY7Ygoe1fb2kMaXv078YXjltq0",
    authDomain: "lucashop-76844.firebaseapp.com",
    projectId: "lucashop-76844",
    storageBucket: "lucashop-76844.appspot.com",
    messagingSenderId: "910547457186",
    appId: "1:910547457186:web:136a5614118f732d79b3fb",
    measurementId: "G-YVN7XTCP1E"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage}