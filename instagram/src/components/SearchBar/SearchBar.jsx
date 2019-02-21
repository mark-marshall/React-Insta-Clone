import React from 'react';
import LogOut from './LogOut';
import styled from 'styled-components';

// Style-Component-Controls
const searchBarStyles = {
  displays: {
    display: 'flex',
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
  justify-content: ${pr => pr.type === 'space-maker' ? 'space-between' : 'space-around'};
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
  justify-content: ${pr => pr.type === 'space-maker' ? 'space-between' : 'space-around'};
  align-items: ${searchBarStyles.displays.alignItems};
`;

const Logos = styled.img`
  width: ${pr => pr.size === 'standard' ? '45px' : '60px'}
  padding-right: ${pr => pr.pos === 'prime' ? '15px' : '0px'}
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
    <NavBar type='space-maker'>
      <SearchBarLeft className="search-bar-left">
        <a href="www.instagram.com">
          <Logos
            alt="logo"
            src={require('./SearchBarAssets/logo.png')}
            pos="prime"
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
          <Logos
            alt="compass"
            src={require('./SearchBarAssets/compass.png')}
            size="standard"
          />
        </a>
        <a href="www.instagram.com">
          <Logos
            alt="heart"
            src={require('./SearchBarAssets/heart.png')}
            size="standard"
          />
        </a>
        <a href="www.instagram.com">
          <Logos
            alt="user"
            src={require('./SearchBarAssets/user.png')}
            size="standard"
          />
        </a>
        <LogOut />
      </SearchBarRight>
    </NavBar>
  );
}
