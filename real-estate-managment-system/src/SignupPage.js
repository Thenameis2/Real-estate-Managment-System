import React, { useState } from 'react';
 // Import the image file

function SignupPage({ onSignin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="signup-container">
      
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Sign Up</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
      <div className="signup-links">
        <button onClick={onSignin}>Sign In</button>
      </div>
    </div>
  );
}

export default SignupPage;
