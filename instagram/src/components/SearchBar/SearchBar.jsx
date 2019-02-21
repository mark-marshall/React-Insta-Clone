import React from 'react';
import LogOut from './LogOut';
import styled from 'styled-components';

// Style-Component-Controls
const searchBarStyles = {
  displays: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  colors: {
    primary: '#dbdbdb',
    secondary: '#fafaf9',
  }
}

// Styled-Components
const NavBar = styled.nav`
  width: 100%;
  display: ${searchBarStyles.displays.display};
  justify-content: space-between;
  height: 120px;
  align-items: ${searchBarStyles.displays.alignItems};
  padding: 0 1%;
  margin-bottom: 3%;
`;

const SearchBarLeft = styled.div`
  width: 280px;
  display: ${searchBarStyles.displays.display};
  align-items: ${searchBarStyles.displays.alignItems};
`;

const SearchBarRight = styled.div`
  width: 230px;
  display: ${searchBarStyles.displays.display};
  justify-content: ${searchBarStyles.displays.justifyContent};
  align-items: ${searchBarStyles.displays.alignItems};
`;

const NavIconsSmall = styled.img`
  width: 45px;
`;

const CameraLogo = styled.img`
  padding-right: 15px;
  width: 60px;
`;

const InstagramHeroLogo = styled.img`
  width: 160px;
  border-left: 1px solid black;
  padding-left: 15px;
`;

const SearchBox = styled.input`
  border: 1px solid ${searchBarStyles.colors.primary};
  color: ${searchBarStyles.colors.primary};
  background-color: ${searchBarStyles.colors.secondary};
  border-radius: 3px;
  width: 215px;
  height: 30px;
  font-size: 15px;

  ::placeholder {
    text-align: ${searchBarStyles.displays.alignItems};
  }
`;

// SearchBar function
export default function SearchBar({
  currentSearch,
  searchBox,
  filterSearches
}) {
  return (
    <NavBar>
      <SearchBarLeft className="search-bar-left">
        <a href="www.instagram.com">
          <CameraLogo
            alt="logo"
            src={require('./SearchBarAssets/logo.png')}
          />
        </a>
        <a href="www.instagram.com">
          <InstagramHeroLogo
            alt="instagram writing"
            src={require('./SearchBarAssets/word-logo.png')}
          />
        </a>
      </SearchBarLeft>
      <div className="search-bar-middle">
        <form onSubmit={event => filterSearches(event)}>
          <SearchBox
            onChange={event => currentSearch(event)}
            value={searchBox}
            placeholder="Search"
          />
        </form>
      </div>
      <SearchBarRight className="search-bar-right">
        <a href="www.instagram.com">
          <NavIconsSmall
            alt="compass"
            src={require('./SearchBarAssets/compass.png')}
          />
        </a>
        <a href="www.instagram.com">
          <NavIconsSmall
            alt="heart"
            src={require('./SearchBarAssets/heart.png')}
          />
        </a>
        <a href="www.instagram.com">
          <NavIconsSmall
            alt="user"
            src={require('./SearchBarAssets/user.png')}
          />
        </a>
        <LogOut />
      </SearchBarRight>
    </NavBar>
  );
}
