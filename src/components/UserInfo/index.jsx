import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const UserProfile = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  border-radius: 50%;
`;
const UserName = styled.div`
  cursor: pointer;
`;
const UserFollower = styled.div`
  position: relative;
  bottom: -0.3rem;
  text-align: end;
  font-size: 0.7rem;
`;
const DeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  color: black;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

const UserInfo = ({
  userId,
  userName,
  userProfileUrl,
  userFollwer = false,
  isDelete,
  onDelete,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <UserInfoWrapper {...props}>
      {userProfileUrl ? <UserProfile src={userProfileUrl} /> : <FaUserCircle />}
      <UserName onClick={() => navigate(`/otheruser/${userId}`)}>
        {userName ? userName : '사용자 없음'}
      </UserName>
      {userFollwer && <UserFollower>{userFollwer} Follwer</UserFollower>}
      {isDelete && <DeleteButton onClick={onDelete}>삭제</DeleteButton>}
    </UserInfoWrapper>
  );
};

export default UserInfo;
