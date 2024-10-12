// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBK8CvmZTBBcV1PAn3uMNOYWgqBrbNarfc",
    authDomain: "portfolio-a921f.firebaseapp.com",
    projectId: "portfolio-a921f",
    storageBucket: "portfolio-a921f.appspot.com",
    messagingSenderId: "980095253906",
    appId: "1:980095253906:web:cd9610a02bd03635f7954b"
};   
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };