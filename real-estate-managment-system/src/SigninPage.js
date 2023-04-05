import React, { useState } from 'react';
import house from './house.jpeg'; // Import the image file

function SigninPage({ onSignup, onForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signin logic
  };

  return (
    <div className="signin-container">
      <div className="signin-image-container">
        <img src={house} alt="Signin" className="signin-image" />
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <h1>Sign In</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
<button type="submit">Sign In</button>
</form>
<div className="signin-links">
<button onClick={onSignup}>Sign Up</button>
<button onClick={onForgot}>Forgot Password</button>
</div>
</div>
);
}

export default SigninPage;
