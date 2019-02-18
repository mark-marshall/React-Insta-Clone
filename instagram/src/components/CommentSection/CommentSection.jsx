import React from 'react';

export default function CommentSection ({ comments }) {
    return (
        <div>
           {
               comments.map(comment => <div className="comments" key={comment.text}>{comment.username}{comment.text}</div>)
           }
        </div>
    )
}