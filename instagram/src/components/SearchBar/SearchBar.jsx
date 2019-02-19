import React from 'react';
import './SearchBar.css';

export default function SearchBar({ currentSearch, searchBox, filterSearches }) {
  return (
    <nav>
      <div className="search-bar-left">
        <a href="www.instagram.com">
          <img
            alt="logo"
            className="nav-item small-icon camera-logo"
            src={require('./SearchBarAssets/logo.png')}
          />
        </a>
        <a href="www.instagram.com">
          <img
            alt="instagram writing"
            className="nav-item logo-writing"
            src={require('./SearchBarAssets/word-logo.png')}
          />
        </a>
      </div>
      <div className="search-bar-middle">
      <form onSubmit={(event) => filterSearches(event)}>
          <input
            onChange={event => currentSearch(event)}
            value={searchBox}
            className="input"
            placeholder="Search"
          />
      </form>
      </div>
      <div className="search-bar-right">
        <a href="www.instagram.com">
          <img
            alt="compass"
            id="search-input"
            className="nav-item small-icon"
            src={require('./SearchBarAssets/compass.png')}
          />
        </a>
        <a href="www.instagram.com">
          <img
            alt="heart"
            className="nav-item small-icon"
            src={require('./SearchBarAssets/heart.png')}
          />
        </a>
        <a href="www.instagram.com">
          <img
            alt="user"
            className="nav-item small-icon"
            src={require('./SearchBarAssets/user.png')}
          />
        </a>
      </div>
    </nav>
  );
}
