import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <nav>
      <div className="search-bar-left">
        <a>
          <img
            alt="logo"
            className="nav-item small-icon camera-logo"
            src={require('./SearchBarAssets/logo.png')}
          />
        </a>
        <a>
          <img
            alt="instagram writing"
            className="nav-item logo-writing"
            src={require('./SearchBarAssets/word-logo.png')}
          />
        </a>
      </div>
      <div className="search-bar-middle">
        <input className="input" placeholder="Search" />
      </div>
      <div className="search-bar-right">
        <a>
          <img
            alt="compass"
            className="nav-item small-icon"
            src={require('./SearchBarAssets/compass.png')}
          />
        </a>
        <a>
          <img
            alt="heart"
            className="nav-item small-icon"
            src={require('./SearchBarAssets/heart.png')}
          />
        </a>
        <a>
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
