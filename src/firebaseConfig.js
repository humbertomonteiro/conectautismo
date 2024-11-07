// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQikWxM1RUm1x-tVdTFIVgGBUjDKwOGxo",
  authDomain: "sommetmondial-393cd.firebaseapp.com",
  projectId: "sommetmondial-393cd",
  storageBucket: "sommetmondial-393cd.firebasestorage.app",
  messagingSenderId: "411863475275",
  appId: "1:411863475275:web:cfca0133f374cd715f59ce",
  measurementId: "G-9TW5N9F65B",
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app, analytics };
