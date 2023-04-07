// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29-zMxjoIjj4eGmMvHF4ho6hkocbh_6k",
  authDomain: "real-real-estate-6a04b.firebaseapp.com",
  projectId: "real-real-estate-6a04b",
  storageBucket: "real-real-estate-6a04b.appspot.com",
  messagingSenderId: "384746396257",
  appId: "1:384746396257:web:e3ec25219b2c67365b6820",
  measurementId: "G-WVW5D4CQYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);