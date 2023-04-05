// import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React, { useState } from 'react';
// // import'./AuthForm.css';

// const AuthForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     // Implement sign up logic here
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Implement sign in logic here
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();
//     // Implement forgot password logic here
//   };

//   const renderSignUpForm = () => (
//     <form onSubmit={handleSignUp}>
//       <h2>Sign Up</h2>
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//       <label htmlFor="password">Password</label>
//       <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
//       <label htmlFor="confirmPassword">Confirm Password</label>
//       <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
//       <button type="submit">Sign Up</button>
//       <button type="button" onClick={() => setShowSignUp(false)}>Cancel</button>
//     </form>
//   );

//   const renderSignInForm = () => (
//     <form onSubmit={handleSignIn}>
//       <h2>Sign In</h2>
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//       <label htmlFor="password">Password</label>
//       <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
//       <button type="submit">Sign In</button>
//       <button type="button" onClick={() => setShowSignUp(true)}>Sign Up</button>
//       <button type="button" onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
//     </form>
//   );

//   const renderForgotPasswordForm = () => (
//     <form onSubmit={handleForgotPassword}>
//       <h2>Forgot Password</h2>
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//       <button type="submit">Submit</button>
//       <button type="button" onClick={() => setShowForgotPassword(false)}>Cancel</button>
//     </form>
//   );

//   return (
//     <div>
//       {showSignUp ? renderSignUpForm() : renderSignInForm()}
//       {showForgotPassword && renderForgotPasswordForm()}
//     </div>
//   );
// };

// export default AuthForm;
// import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Signup from "./Signup";
// import Signin from "./Signin";
// import ForgotPassword from "./ForgotPassword";
// import logo from "./logo.png";

// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo" />
//         </div>
//         <div className="nav-container">
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/signup">Signup</Link>
//               </li>
//               <li>
//                 <Link to="/signin">Signin</Link>
//               </li>
//               <li>
//                 <Link to="/forgot-password">Forgot Password</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <Switch>
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/signin" component={Signin} />
//           <Route exact path="/forgot-password" component={ForgotPassword} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };



// const Signin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Email: ", email, "Password: ", password);
//   };

//   return (
//     <div className="signin-container">
//       <form onSubmit={handleSubmit}>
//         <div className="image-container"></div>
//         <div className="form-container">
//           <h1>Signin</h1>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//           <button type="submit">Signin</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Email: ", email);
//   };

//   return (
//     <div className="forgot-password-container">
//       <form onSubmit={handleSubmit}>
//         <div className="image-container"></div>
//         <div className="form-container">
//           <h1>Forgot Password</h1>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//           <button type="submit">Reset Password</button>
//         </div>
//       </form>
//     </div>
// );
// };

// export default App;  
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('signin');

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <SignupPage onNext={() => setCurrentPage('signin')} />;
      case 'forgot':
        return <ForgotPasswordPage onNext={() => setCurrentPage('signin')} />;
      default:
        return <SigninPage onSignup={() => setCurrentPage('signup')} onForgot={() => setCurrentPage('forgot')} />;
    }
  };

  return <div>{renderPage()}</div>;
}

function SigninPage({ onSignup, onForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signin logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Sign In</button>
      <button type="button" onClick={onSignup}>Sign Up</button>
      <button type="button" onClick={onForgot}>Forgot Password</button>
    </form>
  );
}

function SignupPage({ onNext }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
function ForgotPasswordPage({ onNext }) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
  event.preventDefault();
  // Handle forgot password logic
  onNext();
  };
  
  return (
  <form onSubmit={handleSubmit}>
  <h1>Forgot Password</h1>
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
  <button type="submit">Submit</button>
  </form>
  );
  }
  
  export default App;
