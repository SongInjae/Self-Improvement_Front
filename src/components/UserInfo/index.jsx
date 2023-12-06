import React from 'react';
import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;
`;
const UserProfile = styled.img``;
const UserName = styled.div``;
const UserFollower = styled.div`
  position: relative;
  bottom: -0.3rem;
  text-align: end;
  font-size: 0.7rem;
`;

const UserInfo = ({ isFollwer = false }) => {
  return (
    <UserInfoWrapper>
      <FaUserCircle />
      <UserName>송인재</UserName>
      {isFollwer && <UserFollower>114 Follwer</UserFollower>}
    </UserInfoWrapper>
  );
};

export default UserInfo;
