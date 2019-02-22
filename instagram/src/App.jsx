import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';

class App extends Component {
  state = {
    postData: [],
    enteredSearch: '',
    selectedPost: {},
  }

  componentDidMount(){
    this.setState({
      postData: dummyData,
    })
  }

  render() {
    return (
      <div>
      <SearchBarContainer />
      {
      this.state.postData.map(post => <PostContainer key={post.imageUrl} postData={post} />)
      }
      </div>
    )}
}

export default App;
