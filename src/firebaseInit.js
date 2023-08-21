import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYa0Cn8qHUxSz_yIfgDX2GqSnrDUU2YSI",
    authDomain: "react-e514d.firebaseapp.com",
    projectId: "react-e514d",
    storageBucket: "react-e514d.appspot.com",
    messagingSenderId: "412484288745",
    appId: "1:412484288745:web:c6c8f54891db3a9829b078"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };