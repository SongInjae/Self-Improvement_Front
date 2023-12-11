import styled from '@emotion/styled';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getUserBoard from '../../apis/board/getUserBoard';
import GridPost from '../PostBoard/GridPost';

const ProfilePostContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SelectPost = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid rgba(128, 128, 128, 0.3);
`;

const MenuButton = styled.button`
  background-color: white;
  width: 50%;
  height: 100%;
  text-align: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EmptyPost = styled(Icon)`
  opacity: 0.2;
`;

const EmptyText = styled.div`
  font-size: 1rem;
  margin: 1rem;
  opacity: 0.2;
`;

const UserPost = styled.div`
  width: 425px;
  height: calc(100% - 3rem);
  background-color: rgba(128, 128, 128, 0.08);
`;

const WritePostButton = styled(Icon)`
  position: absolute;
  bottom: 3rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 2px 2px 0px gray;
  cursor: pointer;
`;

const ProfilePost = ({ userId, isMyProfile }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserBoardAPI = async () => {
      const data = await getUserBoard({ userId });
      setPosts(data);
    };

    if (userId) getUserBoardAPI();
  }, [userId]);

  const handlePlusClick = () => {
    navigate('/postupload');
  };
  return (
    <ProfilePostContainer>
      <SelectPost>
        <MenuButton>
          <Icon name="grid" size="1.5rem"></Icon>
        </MenuButton>
        <MenuButton>
          <Icon name="calendar" size="1.5rem"></Icon>
        </MenuButton>
      </SelectPost>
      <UserPost>
        {posts.length ? (
          <GridPost posts={posts} />
        ) : (
          <EmptyWrapper>
            <EmptyPost name="camera" size="70" />
            <EmptyText>게시물 없음</EmptyText>
          </EmptyWrapper>
        )}
        {isMyProfile && (
          <WritePostButton onClick={handlePlusClick} name="plus" size="2rem" />
        )}
      </UserPost>
    </ProfilePostContainer>
  );
};

export default ProfilePost;
