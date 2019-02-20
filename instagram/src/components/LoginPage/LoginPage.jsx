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
  };

  render() {
    return (
      <>
        <form>
          <input
            onChange={event => this.userType(event)}
            value={this.state.username}
            placeholder="Username"
          />
          <input placeholder="Password" />
          <button onClick={() => this.login()}>Log In</button>
        </form>
      </>
    );
  }
}

export default LoginPage;
