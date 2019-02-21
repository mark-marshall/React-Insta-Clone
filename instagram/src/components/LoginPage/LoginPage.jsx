import React from 'react';
import './LoginPage.css';

export default function LoginPage({ login, userType, username }) {
  return (
    <div className="login-area-container">
      <div className="login-container">
        <img
          alt="iPhones"
          className="hero-splash"
          src={require('./LoginPageAssets/InstaPhones.png')}
        />
        <div className="signup-section">
          <img
            alt="instagram"
            className="insta-logo"
            src={require('./LoginPageAssets/word-logo.png')}
          />
          <div className="signup-form">
            <input
              onChange={userType}
              value={username}
              placeholder="Username"
              className="signup-input"
            />
            <input placeholder="Password" className="signup-input" />
            <button onClick={login} className="log-in-button" type="submit">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
