import React, { useState } from "react";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Email: ", email, "Password: ", password);
    };
  
    return (
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div className="image-container"></div>
          <div className="form-container">
            <h1>Signup</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    );
  };