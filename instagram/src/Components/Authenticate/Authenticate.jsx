import React from 'react';

export default function authenticate(App, LoginPage) {
  return class Authenticate extends React.Component {
    state = {
      username: '',
      authed: false,
    };

    userType = event => {
      this.setState({
        username: event.target.value,
      });
    };

    login = () => {
      localStorage.setItem('username', JSON.stringify(this.state.username));
      localStorage.setItem('authed', 'true');
      this.setState({
        authed: true
      });
    };

    componentDidMount() {
      const authed = !!localStorage.getItem('authed');
      this.setState({ authed });
    }

    render() {
      if (this.state.authed === false) {
        return (
          <LoginPage
            {...this.props}
            login={this.login}
            userType={this.userType}
            username={this.state.username}
          />
        );
      }
      return <App {...this.props} username={this.state.username} authed={this.state.authed} />;
    }
  };
}
