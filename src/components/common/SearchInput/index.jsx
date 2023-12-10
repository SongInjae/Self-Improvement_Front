import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import useDebounce from '../../../hooks/useDebounce';

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

const SearchInput = ({ isSortChange, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce({ value: inputValue, delay: 300 });

  useEffect(() => {
    onChange({ debounceValue });
  }, [debounceValue, isSortChange]);

  return (
    <SearchInputContainer>
      <MdOutlineSearch size="1.5rem" color="gray" />
      <Search
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
