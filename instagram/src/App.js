import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      post: [],
    }
  }

  componentDidMount() {
    this.setState({
      post: dummyData,
    })
  }

  render() {
    console.log(this.state.post);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        {this.state.post.map(post => (
          <PostContainer
            key={post.imageUrl}
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
