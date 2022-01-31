// Import the functions you need from the SDKs you need
import { firebase, initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvkoQGv47kZa7kX-I3kgiPxv4H3y1UxOE",
  authDomain: "store-db-615aa.firebaseapp.com",
  projectId: "store-db-615aa",
  storageBucket: "store-db-615aa.appspot.com",
  messagingSenderId: "809486006880",
  appId: "1:809486006880:web:1e89c17a3d031bf79e2105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
