// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQruktmkZBhXbDZeCMI0sxcQQmj-OHJs",
  authDomain: "portfolio-f1f8c.firebaseapp.com",
  projectId: "portfolio-f1f8c",
  storageBucket: "portfolio-f1f8c.firebasestorage.app",
  messagingSenderId: "838799886546",
  appId: "1:838799886546:web:f012dd9e23c02a2d54c50b",
  measurementId: "G-HE22PXPPWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
