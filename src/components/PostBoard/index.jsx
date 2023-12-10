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

const PostBoard = ({ data, sortStandard }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBoardAPI = async () => {
      const data = await getBoard();
      setPosts(data);
    };

    if (data === null) getBoardAPI();
  }, [data]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <PostBoardContainer>
      <PostWrapper>
        {posts &&
          posts.map(({ imageUrl, articleId }) =>
            imageUrl ? (
              <PostImg
                src={imageUrl}
                onClick={() => navigate(`detail/${articleId}`)}
              />
            ) : (
              <DefaultImageWrapper>
                <FaFileImage
                  size={'40%'}
                  onClick={() => navigate(`detail/${articleId}`)}
                />
              </DefaultImageWrapper>
            ),
          )}
      </PostWrapper>
    </PostBoardContainer>
  );
};

export default PostBoard;
