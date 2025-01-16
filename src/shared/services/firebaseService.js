import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// apiKey: import.meta.env.FB_API_KEY,


const firebaseConfig = {
  apiKey: "AIzaSyDxQPCvqDyenFVNPRi56P5pzvET09ryVMc",
  authDomain: "food-app-a3878.firebaseapp.com",
  projectId: "food-app-a3878",
  storageBucket: "food-app-a3878.firebasestorage.app",
  messagingSenderId: "612697412854",
  appId: "1:612697412854:web:adc4db24a75afdea3b88d7",
  measurementId: "G-HZ2PL5YZBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);