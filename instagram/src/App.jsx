import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      posts: dummyData,
    })
  }

  render() {
    return (
      <>
      {
      this.state.postData.map(post => <PostContainer postData={post} />)
      }
      <SearchBarContainer />
      </>
    )}
}

App.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}

export default App;
