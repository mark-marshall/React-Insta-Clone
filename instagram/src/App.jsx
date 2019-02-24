import React, { Component } from 'react';
import styled from 'styled-components';
import instagramStyles from './Styles';
import Authenticate from './Components/Authenticate/Authenticate';
import LoginPage from './Components/Login/LoginPage';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBarContainer from './Components/SearchBar/SearchBarContainer';

const AppWrapper = styled.div`
  width: ${instagramStyles.width.totalApp};
  margin: ${instagramStyles.margin.default};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      enteredSearch: '',
      commentInput: '',
      selectedPost: 0,
      username: props.username,
    };
  }

  componentDidMount() {
    this.setState({
      postData: dummyData,
    });
  }

  onCommentChange = (e, id) => {
    this.setState({
      selectedPost: id,
      commentInput: e.target.value,
    });
  };

  addNewComment = (e, id) => {
    e.preventDefault();
    this.setState(prevState => ({
      postData: prevState.postData.map(post => {
        if (this.state.postData.indexOf(post) === id) {
          post.comments = post.comments.concat({
            username: this.state.username,
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
        ),
      }));
    } else {
      this.setState({
        postData: dummyData,
      });
    }
  };

  clearInputs = () => {
    this.setState({
      commentInput: '',
    });
  };

  incrementLikes = id => {
    this.setState(prevState => ({
      postData: prevState.postData.map(post => {
        if (this.state.postData.indexOf(post) === id) {
          post.likes = post.likes + 1;
          return post;
        } else {
          return post;
        }
      })
    }));
  };

  render() {
    return (
      <AppWrapper>
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
            incrementLikes={this.incrementLikes}
          />
        ))}
      </AppWrapper>
    );
  }
}

export default Authenticate(App, LoginPage);
