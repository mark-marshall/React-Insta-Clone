import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer({
  postData,
  commentInput,
  onCommentChange,
  addNewComment,
  id,
  selectedPost,
}) {
  return (
    <div>
      <img src={postData.thumbnailUrl} alt="thumbnail" />
      <h1>{postData.username}</h1>
      <img src={postData.imageUrl} alt="capture" />
      <p>{moment(postData.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
      <CommentSection
        comments={postData.comments}
        commentInput={commentInput}
        onCommentChange={onCommentChange}
        addNewComment={addNewComment}
        id={id}
        selectedPost={selectedPost}
      />
    </div>
  );
}

PostContainer.propTypes = {
  postData: PropTypes.object.isRequired,
  commentInput: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedPost: PropTypes.number.isRequired,
};
