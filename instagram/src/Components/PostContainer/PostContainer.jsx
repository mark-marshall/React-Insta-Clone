import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer({ postData }) {
  return <CommentSection comments={postData.comments} />;
}

PostContainer.propTypes = {
  postData: PropTypes.object.isRequired,
};
