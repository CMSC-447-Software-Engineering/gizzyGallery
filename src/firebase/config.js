// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0zm0E9eq36qoKOJFP_l-4vnHSeQBtWE",
  authDomain: "gizzy-gallery-2a978.firebaseapp.com",
  projectId: "gizzy-gallery-2a978",
  storageBucket: "gizzy-gallery-2a978.appspot.com",
  messagingSenderId: "775622277222",
  appId: "1:775622277222:web:9cf2890c1ad85736b955a7",
  measurementId: "G-5F6F335M01"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp}