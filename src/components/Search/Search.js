import React from 'react';
import { SearchInput } from './styles';

const Search = props => {
  return (
    <SearchInput
      value={props.searchTerm}
      onChange={props.updateSearchTerm}
      type="text"
      placeholder="Search"
    />
  );
};

export default Search;
