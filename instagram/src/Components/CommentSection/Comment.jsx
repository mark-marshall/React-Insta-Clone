import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PropTypes from 'prop-types';

const Commentary = styled.p`
  span {
    font-weight: ${instagramStyles.font.altWeight};
  }
`;

export default function Comment({ commentData }) {
  return (
    <div>
      <Commentary>
        <span>{commentData.username} </span>
        {commentData.text}
      </Commentary>
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired
};
