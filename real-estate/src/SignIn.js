
// import React,{useState}from "react";
// import './App.css';//import the CSS file with styles
// import house from './house.jpeg'; // Import the image file
// // import { auth } from "./firebase";


// const SignIn = ({ onPageChange }) => {
//   const[Email,setEmail]= useState('')
//   const[password,setPassword]= useState('')
//   return (
//     <div className="container">
//       <div className="left-panel">
//       <img src={house} alt="Signin" className="signin-image" />
//       </div>
//       <div className="right-panel">
//         <form className="form">
//           <h2>Sign In</h2>
//           <div className="input-container">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Enter email" />
//           </div>
//           <div className="input-container">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Enter password" />
//           </div>
//           <button className="btn">Sign In</button>
//         </form>
//         <div className="link-container">
//           <button className="link-btn" onClick={() => onPageChange("signup")}>
//             Sign Up
//           </button>
//           <button className="link-btn" onClick={() => onPageChange("forgotpassword")}>
//             Forgot Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import React,{useState}from "react";
import './App.css';//import the CSS file with styles
import house from './house.jpeg'; // Import the image file
import {signInWithEmailAndPassword } from "firebase/auth";
// import { Auth } from "//real-estate firebase";
import { Auth } from "firebase/auth";




const SignIn = ({ onPageChange }) => {
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')

  const signin =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(Auth,email,password)
    .then((useCredential) =>{})
  }
  return (
    <div className="container">
      <div className="left-panel">
      <img src={house} alt="Signin" className="signin-image" />
      </div>
      <div className="right-panel">
        <form className="form"onSubmit={signin}>
          <h2>Sign In</h2>
          <div className="input-container">
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" id="email" placeholder="Enter email"value={email}onChange={(e) =>setEmail(e.target.value)}></input>
          </div>
          <div className="input-container">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" placeholder="Enter password"value={password}onChange={(e) =>setPassword(e.target.value)}></input>
          </div>
          <button type="submit" className="btn">Sign In</button>
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


