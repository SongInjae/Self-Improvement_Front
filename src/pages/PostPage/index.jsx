import React from 'react';
import SearchInput from '../../components/common/SearchInput';
import SortByPost from '../../components/SortByPost';
import PostBoard from '../../components/PostBoard';
import styled from '@emotion/styled';

const PostPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PostPage = () => {
  return (
    <PostPageWrapper>
      <SearchInput />
      <SortByPost />
      <PostBoard />
    </PostPageWrapper>
  );
};

export default PostPage;
