import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants/color';
import { INTEREST_LIST } from '../../constants/interest';
import getInterestPlan from '../../apis/sharePlan/getInterestPlan';

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

const Tags = ({ setPosts, ...props }) => {
  const [tags, setTags] = useState([
    { interest: '전체', checked: true },
    ...INTEREST_LIST,
  ]);
  const [tag, setTag] = useState('전체');

  useEffect(() => {
    const getTagPlanAPI = async ({ tag }) => {
      const data = await getInterestPlan({ interests: tag });

      if (data?.schedules) {
        setPosts(data?.schedules);
      } else {
        setPosts(null);
      }
    };
    getTagPlanAPI({ tag });
  }, [tag]);

  const handleTagClick = async (e) => {
    const value = e.target.textContent;
    setTag(value);
    setTags((prevState) => {
      const newState = [...prevState];
      return newState.map((tagItem) => {
        if (tagItem.interest === value) {
          tagItem.checked = true;
        } else {
          tagItem.checked = false;
        }
        return tagItem;
      });
    });
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
