import React, { Component } from 'react';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import PT from 'prop-types';

// Style-Component-Controls
const postStyler = {
  displays: {
    display: 'flex',
    alignItems: 'center'
  },
  colors: {
    primary: '#dbdbdb',
    secondary: '#fafaf9',
    tertiary: 'white'
  },
  fonts: {
    primary: '14px',
    secondary: '12px'
  },
  lineHeights: {
    primary: '2.5'
  },
  padding: {
    standard: '2%'
  },
  border: {
    primary: '1px solid'
  }
};

// Styled-Components
const PostDetailer = styled.div`
  width: 560px;
  margin: auto;
  padding: 0 0.2%;
  padding-bottom: 2.5%;

  .post-header-section {
    height: 60px;
    display: ${postStyler.displays.display};
    align-items: center;
    padding: 0 ${postStyler.padding.standard};

    .thumbnail-image {
      width: 30px;
      border-radius: 50%;
    }

    .username {
      padding-left: ${postStyler.padding.standard};
      font-size: ${postStyler.fonts.primary};
      font-weight: bold;
    }
  }

  .main-image {
    max-width: 100%;
    max-height: 100%;
  }

  .under-image-container {
    padding: 0 ${postStyler.padding.standard};
    .post-reaction-image {
      width: 35px;
    }

    .likes {
      line-height: ${postStyler.lineHeights.primary};
      font-weight: bold;
      font-size: ${postStyler.fonts.primary};
      padding-bottom: 0.5%;
    }

    .time-stamp {
      line-height: ${postStyler.lineHeights.primary};
      color: ${postStyler.colors.primary};
      font-size: ${postStyler.fonts.secondary};
    }

    .add-comment-divider {
      height: 10px;
      border-top: ${postStyler.border.primary} ${postStyler.colors.primary};
    }

    .add-comment {
      background-color: ${postStyler.colors.tertiary};
      border: ${postStyler.colors.tertiary};
      font-weight: bold;
      font-size: ${postStyler.fonts.primary};
      width: 100%;
    }

    .add-comment ::placeholder {
      text-align: left;
    }
  }
`;

// PostContainer clas
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
      <PostDetailer className="post-container">
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
          <CommentSection
            comments={this.props.comments}
            time={this.props.timestamp}
          />
        </div>
      </PostDetailer>
    );
  }
}

PostContainer.propTypes = {
  thumbnail: PT.string.isRequired,
  image: PT.string.isRequired,
  username: PT.string.isRequired,
  likes: PT.number.isRequired,
  comments: PT.arrayOf(PT.object.isRequired).isRequired,
  timestamp: PT.string.isRequired
};

export default PostContainer;
