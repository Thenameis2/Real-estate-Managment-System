// import React, { useState } from 'react';

// function ForgotPage({ onSignin }) {
// const [email, setEmail] = useState('');

// const handleSubmit = (event) => {
// event.preventDefault();
// // Handle forgot password logic
// };

// return (
// <div className="forgot-container">
// <form onSubmit={handleSubmit} className="forgot-form">
// <h1>Forgot Password</h1>
// <label htmlFor="email">Email:</label>
// <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
// <button type="submit">Submit</button>
// </form>
// <div className="forgot-links">
// <button onClick={onSignin}>Sign In</button>
// </div>
// </div>
// );
// }

// export default ForgotPage;

// import React from 'react';


// const ForgotPassword = () => {
//   return (
//     <div className="container">
//       <form>
//         <h2>Forgot Password</h2>
//         <p>Enter your email address below and we'll send you a link to reset your password.</p>

//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" name="email" required />

//         <button type="submit">Send Reset Link</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;

// import React from "react";
// import './App.css';

// const ForgotPassword = ({ onPageChange }) => {
//   return (
//     <div className="forgot-password-container">
//       <form className="forgot-password-form">
//         <input type="email" placeholder="Email" className="forgot-password-input" />
//         <button className="forgot-password-button">Reset Password</button>
//       </form>
//       <button onClick={() => onPageChange("signin")} className="forgot-password-link">Sign In</button>
//       <button onClick={() => onPageChange("signup")} className="forgot-password-link">Sign Up</button>
// </div>
// );
// };

// export default ForgotPassword;
// import React from "react";
// import './App.css';

// const ForgotPassword = ({ onPageChange }) => {
//   return (
//     <div className="forgot-password-container">
//       <form className="forgot-password-form">
//         <input
//           type="email"
//           placeholder="Email"
//           className="forgot-password-input"
//         />
//         <button className="forgot-password-button">Reset Password</button>
//       </form>
//       <button onClick={() => onPageChange("signin")} className="forgot-password-link">
//         Sign In
//       </button>
//       <button onClick={() => onPageChange("signup")} className="forgot-password-link">
//         Sign Up
//       </button>
//     </div>
//   );
// };

// export default ForgotPassword;
import React from "react";
import './App.css';

const ForgotPassword = ({ onPageChange }) => {
  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form">
        <input
          type="email"
          placeholder="Email"
          className="forgot-password-input"
        />
        <button className="forgot-password-button">Reset Password</button>
      </form>
      <div className="forgot-password-links">
        <button onClick={() => onPageChange("signin")} className="forgot-password-link">
          Sign In
        </button>
        <button onClick={() => onPageChange("signup")} className="forgot-password-link">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

