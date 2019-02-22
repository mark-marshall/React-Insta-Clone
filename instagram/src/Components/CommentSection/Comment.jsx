import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({
  commentData,
}) {
  return (
    <div>
      <p>{`${commentData.username} ${commentData.text}`}</p>
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.object.isRequired,
};
