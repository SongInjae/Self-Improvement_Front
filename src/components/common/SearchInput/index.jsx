import styled from '@emotion/styled';
import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  padding: 0.4rem 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;
const Search = styled.input`
  width: 100%;
  margin: 0 auto;
  outline: none;
  border: none;
  font-family: 'MainMedium';
  font-size: 1rem;
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <MdOutlineSearch size="1.5rem" color="gray" />
      <Search placeholder="Search" />
    </SearchInputContainer>
  );
};

export default SearchInput;
