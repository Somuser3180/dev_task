import React from 'react';
import './LoginScreen.css';
import { useNavigate } from 'react-router';

function LoginScreen() {

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div class="login-section">
        <h2>Signin to your<br />PopX account</h2>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button class="login-btn" onClick={() => navigate("/profile")}>Login</button>
      </div>

    </div>
  );
}

export default LoginScreen;
