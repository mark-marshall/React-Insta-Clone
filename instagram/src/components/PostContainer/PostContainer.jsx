import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PT from 'prop-types';
import moment from 'moment';

export default function PostContainer({
  thumbnail,
  username,
  image,
  likes,
  comments,
  timestamp
}) {
  return (
    <div className="post-container">
      <div className="post-header-section">
        <img className="thumbnail-image" alt="company logo" src={thumbnail} />
        <div className="username">{username}</div>
      </div>
      <img className="main-image" alt="post" src={image} />
      <div className="under-image-container">
        <img
          className="post-reaction-image"
          alt="heart"
          src={require('./PostContainerAssets/heart.png')}
        />
        <img
          className="post-reaction-image"
          alt="comment"
          src={require('./PostContainerAssets/comment.png')}
        />
        <div className="likes">{likes} likes</div>
        <CommentSection comments={comments} />
        <span className="time-stamp">{moment(timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}</span>
        <div className="add-comment-divider" />
        <input className="add-comment" placeholder="Add a comment..." />
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  thumbnail: PT.string.isRequired,
  image: PT.string.isRequired,
  username: PT.string.isRequired,
  likes: PT.number.isRequired,
  comments: PT.arrayOf(PT.object.isRequired).isRequired,
  timestamp: PT.string.isRequired
};


