// import React, { useState } from 'react';
// import house from './house.jpeg'; // Import the image file

// function SigninPage({ onSignup, onForgot }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle signin logic
//   };

//   return (
//     <div className="signin-container">
//       <div className="signin-image-container">
//         <img src={house} alt="Signin" className="signin-image" />
//       </div>
//       <form onSubmit={handleSubmit} className="signin-form">
//         <h1>Sign In</h1>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
// <button type="submit">Sign In</button>
// </form>
// <div className="signin-links">
// <button onClick={onSignup}>Sign Up</button>
// <button onClick={onForgot}>Forgot Password</button>
// </div>
// </div>
// );
// }

// export default SigninPage;
// import React from 'react';

// const Signin = () => {
//   return (
//     <div className="container">
//       <div className="left-column">
//         <img src="/path/to/image" alt="Signin" />
//       </div>
//       <div className="right-column">
//         <form>
//           <h2>Sign In</h2>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" required />

//           <div className="button-group">
//             <button type="submit">Sign In</button>
//             <button type="button" onClick={() => console.log('signup')}>Signup</button>
//             <button type="button" onClick={() => console.log('forgot password')}>Forgot Password</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signin;
import React from "react";
import './App.css';//import the CSS file with styles
import house from './house.jpeg'; // Import the image file


const SignIn = ({ onPageChange }) => {
  return (
    <div className="container">
      <div className="left-panel">
      <img src={house} alt="Signin" className="signin-image" />
      </div>
      <div className="right-panel">
        <form className="form">
          <h2>Sign In</h2>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button className="btn">Sign In</button>
        </form>
        <div className="link-container">
          <button className="link-btn" onClick={() => onPageChange("signup")}>
            Sign Up
          </button>
          <button className="link-btn" onClick={() => onPageChange("forgotpassword")}>
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



