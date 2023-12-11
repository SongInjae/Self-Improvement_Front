import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 10rem;
  overflow: auto;
`;
const PostImg = styled.img`
  width: 100%;
  height: 10rem;
  cursor: pointer;
`;
const DefaultImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: lightgray;
  cursor: pointer;
`;

const GridPost = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <PostWrapper>
      {posts &&
        posts.map(({ imageUrl, articleId }) =>
          imageUrl ? (
            <PostImg
              src={imageUrl}
              onClick={() => navigate(`/board/detail/${articleId}`)}
            />
          ) : (
            <DefaultImageWrapper>
              <FaFileImage
                size={'40%'}
                onClick={() => navigate(`/board/detail/${articleId}`)}
              />
            </DefaultImageWrapper>
          ),
        )}
    </PostWrapper>
  );
};

export default GridPost;
