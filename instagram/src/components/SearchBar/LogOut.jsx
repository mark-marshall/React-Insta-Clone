import React from 'react';
import './LogOut.css';

class LogOut extends React.Component {
  state = {
    test: false
  };

  clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <button onClick={() => this.clearStorage()} className="log-out-button">
        Log Out
      </button>
    );
  }
}

export default LogOut;
