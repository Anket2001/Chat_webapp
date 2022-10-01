import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUzPX1bL1OF_0cBdUGzea56NJyXPQR-wQ",
    authDomain: "webchat-a212a.firebaseapp.com",
    projectId: "webchat-a212a",
    storageBucket: "webchat-a212a.appspot.com",
    messagingSenderId: "720756397246",
    appId: "1:720756397246:web:bf25de682c029cc648baef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();