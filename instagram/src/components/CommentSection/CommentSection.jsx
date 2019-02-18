import React from 'react';
import './CommentSection.css';

export default function CommentSection ({ comments }) {
    return (
        <div className="published-comments">
           {
               comments.map(comment => <div className="comments" key={comment.text}><span className="commenter">{comment.username}</span> {comment.text}</div>)
           }
        </div>
    )
}