import SearchInput from '../../components/common/SearchInput';
import SortByPost from '../../components/SortByPost';
import PostBoard from '../../components/PostBoard';
import styled from '@emotion/styled';
import postSearchBoard from '../../apis/board/posSearchBoard';
import { useState } from 'react';

const PostPageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
`;

const PostPage = () => {
  const [posts, setPosts] = useState(null);

  const handleChangeInput = async ({ debounceValue }) => {
    if (debounceValue) setPosts(await postSearchBoard({ tags: debounceValue }));
    else setPosts(null);
  };

  return (
    <PostPageWrapper>
      <SearchInput onChange={handleChangeInput} />
      <SortByPost />
      <PostBoard data={posts} />
    </PostPageWrapper>
  );
};

export default PostPage;
