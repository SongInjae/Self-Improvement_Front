import { useState } from 'react';
import SearchInput from '../../components/common/SearchInput';
import Tags from '../../components/Tags';
import Memos from '../../components/Memos';
import styled from '@emotion/styled';
import getTagBoard from '../../apis/sharePlan/getTagPlan';

const SharePlanPageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
`;

const SharePlanPage = () => {
  const [posts, setPosts] = useState(null);

  const handleChangeInput = async ({ debounceValue }) => {
    if (debounceValue) setPosts(await getTagBoard({ tags: debounceValue }));
    else setPosts(null);
  };

  return (
    <SharePlanPageWrapper>
      <SearchInput onChange={handleChangeInput} />
      <Tags posts={posts} setPosts={setPosts} />
      <Memos posts={posts} />
    </SharePlanPageWrapper>
  );
};

export default SharePlanPage;
