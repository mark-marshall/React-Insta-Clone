import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer({ postData }) {
  return (
    <div>
      <img src={postData.thumbnailUrl} alt="thumbnail" />
      <h1>{postData.username}</h1>
      <img src={postData.imageUrl} alt="capture" />
      <p>{moment(postData.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
      <CommentSection comments={postData.comments} />
    </div>
  );
}

PostContainer.propTypes = {
  postData: PropTypes.object.isRequired,
};

