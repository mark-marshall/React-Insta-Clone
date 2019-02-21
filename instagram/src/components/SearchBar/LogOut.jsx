import React from 'react';
import styled from 'styled-components';

// Styled-Components
const LogOutButton = styled.button`
height: 30px;
  width: 60px;
  background-color: #3898f0;
  color: white;
  font-size: 11px;
  border: 1px solid #3898f0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: dodgerblue;
  }
`;

// LogOut class
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
      <LogOutButton onClick={() => this.clearStorage()} className="log-out-button">
        Log Out
      </LogOutButton>
    );
  }
}

export default LogOut;
