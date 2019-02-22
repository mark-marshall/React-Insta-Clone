import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';

class App extends Component {
  state = {
    postData: [],
    enteredSearch: '',
    commentInput: '',
    selectedPost: 0
  };

  componentDidMount() {
    this.setState({
      postData: dummyData
    });
  }

  onCommentChange = (e, id) => {
    this.setState({
      selectedPost: id,
      commentInput: e.target.value
    });
  };

  addNewComment = (e, id) => {
    e.preventDefault();
    this.setState(prevState => ({
      postData: prevState.postData.map(post => {
        if (this.state.postData.indexOf(post) === id) {
          post.comments = post.comments.concat({
            username: 'Jonathon',
            text: this.state.commentInput
          });
          return post;
        } else {
          return post;
        }
      })
    }));

    this.clearInputs();
  };

  onSearchChange = e => {
    this.setState({
      enteredSearch: e.target.value
    });
  };

  onSearchEnter = e => {
    e.preventDefault();
    if (this.state.enteredSearch) {
      this.setState(prevState => ({
        postData: prevState.postData.filter(
          post => post.username === this.state.enteredSearch
        )
      }));
    } else {
      this.setState({
        postData: dummyData
      });
    }
  };

  clearInputs = () => {
    this.setState({
      commentInput: ''
    });
  };

  render() {
    return (
      <div>
        <SearchBarContainer
          enteredSearch={this.state.enteredSearch}
          onSearchChange={this.onSearchChange}
          onSearchEnter={this.onSearchEnter}
        />
        {this.state.postData.map(post => (
          <PostContainer
            id={dummyData.indexOf(post)}
            key={post.imageUrl}
            postData={post}
            commentInput={this.state.commentInput}
            onCommentChange={this.onCommentChange}
            addNewComment={this.addNewComment}
            selectedPost={this.state.selectedPost}
          />
        ))}
      </div>
    );
  }
}

export default App;
