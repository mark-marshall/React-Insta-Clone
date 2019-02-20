import React, { Component } from 'react';
//import './App.css';
import dummyData from './dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        post: [],
        searchBox: ''
      };
    }
  
    componentDidMount() {
      this.setState({
        post: dummyData
      });
    }
  
    currentSearch = event => {
      event.preventDefault();
      this.setState({
        searchBox: event.target.value
      });
      this.clearSearch();
    };
  
    filterSearches = event => {
      event.preventDefault();
      if (this.state.searchBox) {
        this.setState(prevState => ({
          post: prevState.post.filter(
            item => item.username === this.state.searchBox
          )
        }));
      } else {
        this.setState({
          post: dummyData
        });
      }
    };
  
    clearSearch = () => {
      this.setState({
        currentSearch: '',
        post: dummyData
      });
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <SearchBar
              searchBox={this.state.searchBox}
              currentSearch={this.currentSearch}
              filterSearches={this.filterSearches}
            />
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
  
  export default PostsPage;
  