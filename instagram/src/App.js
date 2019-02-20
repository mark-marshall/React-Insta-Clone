import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import * as instaHOC from './Authentication/Authenticate';

class App extends Component {
  render() {
    return (
        <PostsPage />
    );
  }
}

export default instaHOC.authenticate(App);
