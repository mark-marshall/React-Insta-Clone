import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ commentData }) {
  return (
    <div>
      <h3>{commentData.username}</h3>
      <p>{commentData.text}</p>
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};
