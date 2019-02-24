import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import moment from 'moment';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

const TimeSince = styled.div`
  font-size: ${instagramStyles.font.small};
  color: ${instagramStyles.color.secondary};
  padding-bottom: ${instagramStyles.padding.bottomStandard};
  border-bottom: ${instagramStyles.borderBottom.standard};
`;

export default function CommentSection({
  comments,
  commentInput,
  onCommentChange,
  addNewComment,
  id,
  selectedPost,
  postData,
}) {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.text}
          commentData={comment}
          commentInput={commentInput}
          onCommentChange={onCommentChange}
          addNewComment={addNewComment}
        />
      ))}
      <TimeSince>{moment(postData.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</TimeSince>
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
  postData: PropTypes.object.isRequired,
};
