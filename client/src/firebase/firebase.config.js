// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk8wTuTNA13S4rXbH4EVzvZ8RH7TVKQXM",
  authDomain: "aircnc-4c130.firebaseapp.com",
  projectId: "aircnc-4c130",
  storageBucket: "aircnc-4c130.appspot.com",
  messagingSenderId: "1012884532550",
  appId: "1:1012884532550:web:e436fc42585970ca648947",
  measurementId: "G-KX907S4X0K"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 

export default app