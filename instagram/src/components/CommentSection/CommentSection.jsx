import React from 'react';
import './CommentSection.css';
import PT from 'prop-types';

export default function CommentSection({ comments }) {
  return (
    <div className="published-comments">
      {comments.map(comment => (
        <div className="comments" key={comment.text}>
          <span className="commenter">{comment.username}</span> {comment.text}
        </div>
      ))}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PT.arrayOf(PT.object.isRequired).isRequired
};
