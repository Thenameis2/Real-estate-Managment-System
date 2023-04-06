// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcr5yYy3W1nK1FfhS8wH3oX4tbJsbn5DY",
  authDomain: "real-estate-managment-fa906.firebaseapp.com",
  projectId: "real-estate-managment-fa906",
  storageBucket: "real-estate-managment-fa906.appspot.com",
  messagingSenderId: "949328337681",
  appId: "1:949328337681:web:54a1bd28087ebed9de8ab0",
  measurementId: "G-6F83Y6S6JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);