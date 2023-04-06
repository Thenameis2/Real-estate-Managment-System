// import React, { useState } from 'react';
//  // Import the image file

// function SignupPage({ onSignin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle signup logic
//   };

//   return (
//     <div className="signup-container">
      
//       <form onSubmit={handleSubmit} className="signup-form">
//         <h1>Sign Up</h1>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//         <label htmlFor="confirm-password">Confirm Password:</label>
//         <input type="password" id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
//         <button type="submit">Sign Up</button>
//       </form>
//       <div className="signup-links">
//         <button onClick={onSignin}>Sign In</button>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;
// import React from 'react';

// const Signup = () => {
//   return (
//     <div className="container">
//       <div className="left-column">
//         <img src="/path/to/image" alt="Signup" />
//       </div>
//       <div className="right-column">
//         <form>
//           <h2>Sign Up</h2>
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" required />

//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" required />

//           <button type="submit">Sign Up</button>
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React from "react";
import house from "./house.jpeg";

const SignUp = ({ onPageChange }) => {
  return (
    <div className="container">
      <div className="left-panel">
        <img src={house} alt="Signin" className="signin-image" />
      </div>
      <div className="right-panel">
        <form className="form">
          <h2>Sign Up</h2>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <button className="btn">Sign Up</button>
        </form>
        <div className="link-container">
          <button className="link-btn" onClick={() => onPageChange("signin")}>
            Sign In
          </button>
          <button
            className="link-btn"
            onClick={() => onPageChange("forgotpassword")}
          >
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

