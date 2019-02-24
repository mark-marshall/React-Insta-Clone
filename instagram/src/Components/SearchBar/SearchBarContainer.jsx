import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';

const NavWrapper = styled.nav`
  height: ${instagramStyles.nav.height};
  display: ${instagramStyles.display.default};
  align-items: ${instagramStyles.display.alignPrimary};
  justify-content: ${instagramStyles.display.spacePrimary};
  padding: ${instagramStyles.padding.narrow};
  margin-bottom: ${instagramStyles.margin.bottomSpacer};
`;

const NavSection = styled.div`
  width: ${instagramStyles.nav.sectionWidths};
  display: ${instagramStyles.display.default};
  align-items: ${instagramStyles.display.alignPrimary};
  justify-content: ${instagramStyles.display.spacePrimary};
`;

const Logo = styled.img`
  width: ${pr => pr.type === 'hero' ? instagramStyles.width.logoLarge : instagramStyles.width.logoStandard};
`;

export default function SearchBarContainer({
  enteredSearch,
  onSearchChange,
  onSearchEnter
}) {
  return (
    <NavWrapper>
      <NavSection>
        <a href="www.instagram.com">
          <Logo
            alt="logo"
            src={require('./SearchBarAssets/instagram-logo.png')}
          />
        </a>
        <a href="www.instagram.com">
          <Logo
            alt="instagram writing"
            src={require('./SearchBarAssets/instagram-word-logo.png')}
            type="hero"
          />
        </a>
      </NavSection>
      <SearchBarInput
        enteredSearch={enteredSearch}
        onSearchChange={onSearchChange}
        onSearchEnter={onSearchEnter}
      />
      <NavSection>
        <a href="www.instagram.com">
          <Logo
            alt="compass"
            src={require('./SearchBarAssets/instagram-compass.png')}
          />
        </a>
        <a href="www.instagram.com">
          <Logo
            alt="heart"
            src={require('./SearchBarAssets/instagram-heart.png')}
          />
        </a>
        <a href="www.instagram.com">
          <Logo
            alt="user"
            src={require('./SearchBarAssets/instagram-user.png')}
          />
        </a>
      </NavSection>
    </NavWrapper>
  );
}

SearchBarContainer.propTypes = {
  enteredSearch: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchEnter: PropTypes.func.isRequired,
};
