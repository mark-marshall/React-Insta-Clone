import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

export default function CommentSection({
  comments,
  commentInput,
  onCommentChange,
  addNewComment,
  id,
  selectedPost,
}) {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.text}
          commentData={comment}
          coommentInput={commentInput}
          onCommentChange={onCommentChange}
          addNewComment={addNewComment}
        />
      ))}
      <CommentInput
        commentInput={commentInput}
        onCommentChange={onCommentChange}
        addNewComment={addNewComment}
        id={id}
        selectedPost={selectedPost}
      />
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  commentInput: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedPost: PropTypes.number.isRequired,
};
