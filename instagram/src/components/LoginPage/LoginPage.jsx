import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  state = {
    username: '',
    loggedIn: false
  };

  userType = event => {
    this.setState({
      username: event.target.value
    });
  };

  login = () => {
    localStorage.setItem('username', JSON.stringify(this.state.username));
    this.setState({
        loggedIn: !this.state.loggedIn,
    })
  };

  render() {
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
            <form className="signup-form">
              <input
                onChange={event => this.userType(event)}
                value={this.state.username}
                placeholder="Username"
                className="signup-input"
              />
              <input placeholder="Password" className="signup-input" />
              <button onClick={() => this.login()} className="log-in-button">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
