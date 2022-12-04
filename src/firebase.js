import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
