import React, { Component } from 'react';
import PT from 'prop-types';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {dummyData.map(post => (
          <PostContainer
            key={post.timestamp}
            thumbnail={post.thumbnailUrl}
            username={post.username}
            image={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default App;
