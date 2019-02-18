import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer({ thumbnail, username, image, likes, comments, timestamp }) {
  return (
    <div className="post-container">
      <header>
          <img alt="company logo" src={thumbnail}/>
          {username}
      </header>
      <img alt="post" src={image}/>
      <div>{likes} likes</div>
    <CommentSection comments={comments}/>
    <span className="time-stamp">{timestamp}</span>
    </div>
  );
}
