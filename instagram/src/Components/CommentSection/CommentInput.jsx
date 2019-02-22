import React from 'react';
import PropTypes from 'prop-types';

export default function CommentSection({
  commentInput,
  onCommentChange,
  addNewComment,
  id,
  selectedPost,
}) {

  const whichInputIsBeingUsed = id === selectedPost ? commentInput : '';

  return (
    <form onSubmit={e => addNewComment(e, id)}>
      <input
        onChange={e => onCommentChange(e, id)}
        value={whichInputIsBeingUsed}
        placeholder="... add a comment"
      />
    </form>
  );
}

CommentSection.propTypes = {
  commentInput: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedPost: PropTypes.number.isRequired,
};
