import styled from '@emotion/styled';
import React, { useState } from 'react';

const SortByPostContainer = styled.div`
  float: right;
  display: flex;
  gap: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
const SortText = styled.div`
  color: ${({ checked }) => (checked ? 'black' : 'gray')};
  cursor: pointer;

  &::before {
    content: '✔︎';
  }
`;

const SortByPost = () => {
  const [checkedSort, setChekedSort] = useState('추천순');

  const handleRecommendClick = () => {
    setChekedSort('추천순');
  };
  const handleFollowerClick = () => {
    setChekedSort('팔로워');
  };

  return (
    <SortByPostContainer>
      <SortText
        checked={checkedSort === '추천순'}
        onClick={handleRecommendClick}
      >
        추천순
      </SortText>
      <SortText
        checked={checkedSort === '팔로워'}
        onClick={handleFollowerClick}
      >
        팔로워
      </SortText>
    </SortByPostContainer>
  );
};

export default SortByPost;
