import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import Drop from '../../assets/image/dropdownArrow.svg';
import { FaFileImage } from 'react-icons/fa6';
import getBoard from '../../apis/board/getBoard';
import { useNavigate } from 'react-router-dom';

const PostBoardContainer = styled.div`
  clear: right;
  width: 100%;
  height: calc(100% - 5rem);
`;
const PostWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
`;
const PostImg = styled.img`
  width: 100%;
  height: 10rem;
`;
const DefaultImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  background-color: lightgray;
  justify-content: center;
  align-items: center;
`;

const PostBoard = () => {
  const [posts, setPosts] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getBoardAPI = async () => {
      const data = await getBoard();
      setPosts(data);
    };
    getBoardAPI();
  }, []);

  return (
    <PostBoardContainer>
      <PostWrapper>
        {posts &&
          posts.map(({ imageUrl, articleId }) => (
            <DefaultImageWrapper
              onClick={() => navigate(`detail/${articleId}`)}
            >
              {imageUrl ? (
                <PostImg src={imageUrl} />
              ) : (
                <FaFileImage size={'40%'} />
              )}
            </DefaultImageWrapper>
          ))}
      </PostWrapper>
    </PostBoardContainer>
  );
};

export default PostBoard;
