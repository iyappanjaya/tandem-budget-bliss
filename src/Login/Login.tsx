import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = () => {
    // Handle email/password login logic here (e.g., call an authentication API)
    console.log('Email Login clicked with:', { email, password });
  };

  const loginWithGmail = () => {
    // Placeholder for third-party login (e.g., Gmail)
    console.log('Logging in with Gmail');
  };

  const handleSignUp = () => {
    // Redirect or show a sign-up form
    console.log('Redirecting to sign-up page');
  };

  const handleForgotPassword = () => {
    // Redirect or show a forgot password form
    console.log('Redirecting to forgot password page');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign in</h2>

        {/* Email/Password Login */}
        <div className="email-login">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <button onClick={handleEmailLogin} className="login-button">
            Login
          </button>
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        {/* Login with Gmail */}
        <button onClick={loginWithGmail} className="gmail-login">
          Login with Gmail
        </button>

        <div className="additional-options">
          <span onClick={handleSignUp}>Sign Up</span>
          <span onClick={handleForgotPassword}>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
