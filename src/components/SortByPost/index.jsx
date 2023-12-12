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

const SortByPost = ({ sortStandard, setSortStandard }) => {
  const handleRecommendClick = (e) => {
    setSortStandard(e.target.textContent);
  };
  const handleFollowerClick = (e) => {
    setSortStandard(e.target.textContent);
  };

  return (
    <SortByPostContainer>
      <SortText
        checked={sortStandard === '추천순'}
        onClick={handleRecommendClick}
      >
        추천순
      </SortText>
      <SortText
        checked={sortStandard === '팔로워순'}
        onClick={handleFollowerClick}
      >
        팔로워순
      </SortText>
    </SortByPostContainer>
  );
};

export default SortByPost;
