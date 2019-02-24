import React from 'react';
import PT from 'prop-types';

export default function LoginPage({ login, userType, username }) {
  return (
    <div>
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
  );
}

LoginPage.propTypes = {
  login: PT.func.isRequired,
  userType: PT.func.isRequired,
  username: PT.string.isRequired,
};
