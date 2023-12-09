import React from 'react';
import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  cursor: pointer;
`;
const UserProfile = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  border-radius: 50%;
`;
const UserName = styled.div``;
const UserFollower = styled.div`
  position: relative;
  bottom: -0.3rem;
  text-align: end;
  font-size: 0.7rem;
`;

const UserInfo = ({
  userFollwer = false,
  userProfileUrl,
  userName,
  ...props
}) => {
  return (
    <UserInfoWrapper {...props}>
      {userProfileUrl ? <UserProfile src={userProfileUrl} /> : <FaUserCircle />}
      <UserName>{userName ? userName : '사용자 없음'}</UserName>
      {userFollwer && <UserFollower>{userFollwer} Follwer</UserFollower>}
    </UserInfoWrapper>
  );
};

export default UserInfo;
