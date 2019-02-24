import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PropTypes from 'prop-types';

const SearchBox = styled.input`
  border: ${instagramStyles.inputs.border};
  border-radius: ${instagramStyles.inputs.borderRadius};
  background-color: ${instagramStyles.inputs.backgroundColor};
  width: ${instagramStyles.inputs.width};
  height: ${instagramStyles.inputs.height};
  font-size: ${instagramStyles.font.standard};

  ::placeholder {
    text-align: ${instagramStyles.display.alignPrimary};
  }
`;

export default function SearchBarInput({
  enteredSearch,
  onSearchChange,
  onSearchEnter,
}) {
  return (
    <div>
      <form onSubmit={e => onSearchEnter(e)}>
        <SearchBox
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
  onSearchEnter: PropTypes.func.isRequired
};
