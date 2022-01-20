// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTaN5MEyExZLK-3CljzzA-M1dlmPejGII",
  authDomain: "tinder-clone-99a87.firebaseapp.com",
  projectId: "tinder-clone-99a87",
  storageBucket: "tinder-clone-99a87.appspot.com",
  messagingSenderId: "697769558329",
  appId: "1:697769558329:web:5cfa93e31018d107b328e8",
  measurementId: "G-ENQMHS50JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }