import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from './SearchBarInput';

export default function SearchBarContainer({
  enteredSearch,
  onSearchChange,
  onSearchEnter,
}) {
  return (
    <div>
      <h1>Welcome to InstaGGG!</h1>
      <SearchBarInput
        enteredSearch={enteredSearch}
        onSearchChange={onSearchChange}
        onSearchEnter={onSearchEnter}
      />
    </div>
  );
}

SearchBarContainer.propTypes = {
  enteredSearch: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchEnter: PropTypes.func.isRequired,
};
