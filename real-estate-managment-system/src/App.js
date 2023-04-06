// import React, { useState } from 'react';
// import './App.css';
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

