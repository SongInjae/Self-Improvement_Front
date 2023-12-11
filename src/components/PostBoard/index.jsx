import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { FaFileImage } from 'react-icons/fa6';
import getBoard from '../../apis/board/getBoard';
import { useNavigate } from 'react-router-dom';
import GridPost from './GridPost';

const PostBoardContainer = styled.div`
  clear: right;
  width: 100%;
  height: calc(100% - 5rem);
`;

const PostBoard = ({ data, sortStandard }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBoardAPI = async () => {
      const data = await getBoard({ method: sortStandard });
      setPosts(data);
    };

    if (data === null) getBoardAPI();
  }, [data, sortStandard]);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <PostBoardContainer>
      <GridPost posts={posts} />
    </PostBoardContainer>
  );
};

export default PostBoard;
