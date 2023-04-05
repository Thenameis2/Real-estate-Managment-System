import React, { useState } from 'react';

function ForgotPage({ onSignin }) {
const [email, setEmail] = useState('');

const handleSubmit = (event) => {
event.preventDefault();
// Handle forgot password logic
};

return (
<div className="forgot-container">
<form onSubmit={handleSubmit} className="forgot-form">
<h1>Forgot Password</h1>
<label htmlFor="email">Email:</label>
<input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
<button type="submit">Submit</button>
</form>
<div className="forgot-links">
<button onClick={onSignin}>Sign In</button>
</div>
</div>
);
}

export default ForgotPage;

