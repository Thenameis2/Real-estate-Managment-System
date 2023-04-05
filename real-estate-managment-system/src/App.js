import React, { useState } from 'react';
import './App.css';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import ForgotPage from './ForgotPage';

function App() {
  const [currentPage, setCurrentPage] = useState('signin');

  const handleSignupClick = () => {
    setCurrentPage('signup');
  };

  const handleSigninClick = () => {
    setCurrentPage('signin');
  };

  const handleForgotClick = () => {
    setCurrentPage('forgot');
  };

  return (
    <div className="App">
      {currentPage === 'signup' && <SignupPage onSignin={handleSigninClick} />}
      {currentPage === 'signin' && <SigninPage onSignup={handleSignupClick} onForgot={handleForgotClick} />}
      {currentPage === 'forgot' && <ForgotPage onSignin={handleSigninClick} />}
    </div>
  );
}

export default App;
