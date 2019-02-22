import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

export default function CommentSection({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <Comment key={comment.text} commentData={comment} />
      ))}
      <CommentInput />
    </>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
