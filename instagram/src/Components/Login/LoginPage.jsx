import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PT from 'prop-types';

const LoginWrapper = styled.div`
  width: ${instagramStyles.width.totalApp};
  margin: ${instagramStyles.margin.default};
  margin-top: ${instagramStyles.margin.topSpacer};
  display: ${instagramStyles.display.default};
  justify-content: ${instagramStyles.display.spaceSecondary};
  align-items: ${instagramStyles.display.alignPrimary};

  img {
    width: ${instagramStyles.width.percentStandard};
    margin-bottom: ${instagramStyles.margin.largeBottomSpacer};
  }

  input, button {
    width: ${instagramStyles.width.standardNests};
    border: ${instagramStyles.inputs.border};
    border-radius: ${instagramStyles.inputs.borderRadius};
    background-color: ${instagramStyles.inputs.backgroundColor};
    height: ${instagramStyles.inputs.height};
    margin-bottom: ${instagramStyles.margin.bottomSpacer};
  }

  button {
    cursor: ${instagramStyles.hover.cursor};
    background-color: ${instagramStyles.color.button};
    font-size: ${instagramStyles.font.standard};
    color: ${instagramStyles.color.tertiary};
    height: ${instagramStyles.button.height};
    font-size: ${instagramStyles.font.large};

    &:hover {
      background-color: ${instagramStyles.color.buttonHover};
    }
  }
`;

const SignUpWrapper = styled.div`
  display: ${instagramStyles.display.default};
  flex-direction: ${instagramStyles.display.secondayDirection};
  width: ${instagramStyles.width.signUpForm};
  height: ${instagramStyles.signUpForms.height};
  align-items: ${instagramStyles.display.alignPrimary};

  img {
    width: ${instagramStyles.width.logoXLarge};
  }
`;

export default function LoginPage({ login, userType, username }) {
  return (
    <LoginWrapper>
      <img
        alt="iPhones"
        className="hero-splash"
        src={require('./LoginPageAssets/instagram-phones.png')}
      />
      <SignUpWrapper>
        <img
          alt="instagram"
          src={require('./LoginPageAssets/instagram-word-logo.png')}
        />
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
      </SignUpWrapper>
    </LoginWrapper>
  );
}

LoginPage.propTypes = {
  login: PT.func.isRequired,
  userType: PT.func.isRequired,
  username: PT.string.isRequired,
};
