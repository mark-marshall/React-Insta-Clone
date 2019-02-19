import React from 'react';
import './CommentSection.css';
import './AddComment';
import PT from 'prop-types';
import AddComment from './AddComment';

export default function CommentSection({ comments }) {
  return (
    <div className="comment-section">
      <div className="published-comments">
        {comments.map(comment => (
          <div className="comments" key={comment.text}>
            <span className="commenter">{comment.username}</span> {comment.text}
          </div>
        ))}
      </div>
      <AddComment />
    </div>
  );
}

CommentSection.propTypes = {
  comments: PT.arrayOf(PT.object.isRequired).isRequired
};
