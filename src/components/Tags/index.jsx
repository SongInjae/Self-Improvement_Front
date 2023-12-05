import styled from '@emotion/styled';
import React from 'react';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants/color';

const TagContainer = styled.div`
  display: flex;
  width: 80%;
  height: 2rem;
  margin: 0 auto;
  gap: 1rem;
  overflow: auto;
`;
const Tag = styled.div`
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  background-color: ${({ check }) => (check ? ORIGINAL_YELLOW : PASTEL_ORANGE)};
  color: white;
  border-radius: 1rem;
  font-size: 0.8rem;
  line-height: 1rem;
  cursor: pointer;
`;

const Tags = ({ tags, ...props }) => {
  const handleTagClick = () => {
    console.log('tag Click');
    // TODO: Click 이벤트 연결
  };

  return (
    <TagContainer>
      {tags.map((tag) => (
        <Tag check={tag.checked} onClick={handleTagClick} {...props}>
          {tag.interest}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default Tags;
