// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxiyWHqBM3BdW1c5Z9w-iZNTfsCwbqshU",
    authDomain: "real-estate-system-7a95e.firebaseapp.com",
    projectId: "real-estate-system-7a95e",
    storageBucket: "real-estate-system-7a95e.appspot.com",
    messagingSenderId: "881526634744",
    appId: "1:881526634744:web:ebe71f76790fdeee63630d",
    measurementId: "G-LDE9EMKL0M"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export auth;
