import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import * as instaHOC from './Authentication/Authenticate';
import LoginPage from './components/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
        <PostsPage />
    );
  }
}

export default instaHOC.authenticate(App, LoginPage);
