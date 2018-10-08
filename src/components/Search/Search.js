import React from 'react';
import PropTypes from 'prop-types';

import { SearchInput } from './styles';

const Search = ({ searchTerm, updateSearchTerm }) => (
  <SearchInput value={searchTerm} onChange={updateSearchTerm} type="text" placeholder="Search" />
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired,
};

export default Search;
