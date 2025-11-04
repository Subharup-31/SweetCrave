// Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyAtF-6wNRLvEH-25R2krFCwpxLQNM9iwPg",
    authDomain: "sweetcrave-ad95d.firebaseapp.com",
    projectId: "sweetcrave-ad95d",
    storageBucket: "sweetcrave-ad95d.appspot.com",
    messagingSenderId: "850187192131",
    appId: "1:850187192131:web:db7d3d2510b830874dd1f6",
    measurementId: "G-38TXV3ZGT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, firebaseConfig };
