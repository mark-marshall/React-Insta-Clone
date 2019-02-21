import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PT from 'prop-types';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  incrementLikes = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-header-section">
          <img
            className="thumbnail-image"
            alt="company logo"
            src={this.props.thumbnail}
          />
          <div className="username">{this.props.username}</div>
        </div>
        <img className="main-image" alt="post" src={this.props.image} />
        <div className="under-image-container">
          <img
            className="post-reaction-image"
            alt="heart"
            src={require('./PostContainerAssets/heart.png')}
            onClick={() => this.incrementLikes()}
          />
          <img
            className="post-reaction-image"
            alt="comment"
            src={require('./PostContainerAssets/comment.png')}
          />
          <div className="likes">{this.state.likes} likes</div>
          <CommentSection comments={this.props.comments} time={this.props.timestamp}/>
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  thumbnail: PT.string.isRequired,
  image: PT.string.isRequired,
  username: PT.string.isRequired,
  likes: PT.number.isRequired,
  comments: PT.arrayOf(PT.object.isRequired).isRequired,
  timestamp: PT.string.isRequired,
};

export default PostContainer;
