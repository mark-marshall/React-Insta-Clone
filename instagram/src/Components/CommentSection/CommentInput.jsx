import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PropTypes from 'prop-types';

const AddCommentInput = styled.input`
  font-size: ${instagramStyles.font.small};
  font-weight: ${instagramStyles.font.altWeight};
  border: ${instagramStyles.color.tertiary};
  width: ${instagramStyles.width.standardNests};
  height: ${instagramStyles.inputs.height};
`;

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
      <AddCommentInput
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
