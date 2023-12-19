
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // For Firestore
const firebaseConfig = {
    apiKey: "AIzaSyA8eWzFGNIt1cIYsN43b5WYXN-mZ6mLlac",
    authDomain: "capussafety.firebaseapp.com",
    databaseURL: "https://capussafety-default-rtdb.firebaseio.com",
    projectId: "capussafety",
    storageBucket: "capussafety.appspot.com",
    messagingSenderId: "401721933316",
    appId: "1:401721933316:web:af5c1ab3faf36691d87f51",
    measurementId: "G-5FNM0XLMWM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


export const db = getFirestore(app); // Firestore instance
