import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBarInput({
  enteredSearch,
  onSearchChange,
  onSearchEnter,
}) {
  return (
    <div>
      <form onSubmit={e => onSearchEnter(e)}>
        <input
          onChange={onSearchChange}
          value={enteredSearch}
          placeholder="Search"
        />
      </form>
    </div>
  );
}

SearchBarInput.propTypes = {
  enteredSearch: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  onSearchEnter: PropTypes.func.isRequired,
};
