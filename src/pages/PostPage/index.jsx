import SearchInput from '../../components/common/SearchInput';
import SortByPost from '../../components/SortByPost';
import PostBoard from '../../components/PostBoard';
import styled from '@emotion/styled';
import getSearchBoard from '../../apis/board/getSearchBoard';
import { useEffect, useState } from 'react';

const PostPageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
`;

const PostPage = () => {
  const [posts, setPosts] = useState(null);
  const [sortStandard, setSortStandard] = useState('추천순');

  const handleChangeInput = async ({ debounceValue }) => {
    if (debounceValue)
      setPosts(
        await getSearchBoard({ keyword: debounceValue, method: sortStandard }),
      );
    else setPosts(null);
  };

  return (
    <PostPageWrapper>
      <SearchInput onChange={handleChangeInput} isSortChange={sortStandard} />
      <SortByPost
        sortStandard={sortStandard}
        setSortStandard={setSortStandard}
      />
      <PostBoard data={posts} />
    </PostPageWrapper>
  );
};

export default PostPage;
