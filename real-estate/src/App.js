// import React, { useState } from 'react';
import './App.css';
// import SignupPage from './SignupPage';
// import SigninPage from './SigninPage';
// import ForgotPage from './ForgotPage';


// function App() {
//   const [currentPage, setCurrentPage] = useState('signin');

//   const handleSignupClick = () => {
//     setCurrentPage('signup');
//   };

//   const handleSigninClick = () => {
//     setCurrentPage('signin');
//   };

//   const handleForgotClick = () => {
//     setCurrentPage('forgot');
//   };

//   return (
//     <div className="App">
//       {currentPage === 'signup' && <SignupPage onSignin={handleSigninClick} />}
//       {currentPage === 'signin' && <SigninPage onSignup={handleSignupClick} onForgot={handleForgotClick} />}
//       {currentPage === 'forgot' && <ForgotPage onSignin={handleSigninClick} />}
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

const App = () => {
  const [currentPage, setCurrentPage] = useState("signin");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === "signin" && <SignIn onPageChange={handlePageChange} />}
      {currentPage === "signup" && <SignUp onPageChange={handlePageChange} />}
      {currentPage === "forgotpassword" && (
        <ForgotPassword onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import ForgotPassword from "./ForgotPassword";


// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD29-zMxjoIjj4eGmMvHF4ho6hkocbh_6k",
//   authDomain: "real-real-estate-6a04b.firebaseapp.com",
//   projectId: "real-real-estate-6a04b",
//   storageBucket: "real-real-estate-6a04b.appspot.com",
//   messagingSenderId: "384746396257",
//   appId: "1:384746396257:web:e3ec25219b2c67365b6820",
//   measurementId: "G-WVW5D4CQYP"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// const App = () => {
//   const [currentPage, setCurrentPage] = useState("signin");

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleSignIn = (email, password) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user);
//         // Do something with the signed-in user object
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // Handle sign-in error
//       });
//   };

//   const handleSignUp = (email, password) => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log(user);
//         // Do something with the signed-up user object
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // Handle sign-up error
//       });
//   };

//   const handleForgotPassword = (email) => {
//     firebase
//       .auth()
//       .sendPasswordResetEmail(email)
//       .then(() => {
//         // Password reset email sent
//         console.log("Password reset email sent");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // Handle password reset error
//       });
//   };

//   return (
//     <div className="App">
//       {currentPage === "signin" && (
//         <SignIn onPageChange={handlePageChange} onSignIn={handleSignIn} />
//       )}
//       {currentPage === "signup" && (
//         <SignUp onPageChange={handlePageChange} onSignUp={handleSignUp} />
//       )}
//       {currentPage === "forgotpassword" && (
//         <ForgotPassword
//           onPageChange={handlePageChange}
//           onForgotPassword={handleForgotPassword}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
