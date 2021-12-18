import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtH2P7C6a4FRDY3RVMiMVtqvFIdpTb-UU",
  authDomain: "tys-shop-computers.firebaseapp.com",
  projectId: "tys-shop-computers",
  storageBucket: "tys-shop-computers.appspot.com",
  messagingSenderId: "87047003520",
  appId: "1:87047003520:web:ea85df0d09fa15e2163565"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);