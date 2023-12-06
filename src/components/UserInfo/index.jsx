import React from 'react';
import styled from '@emotion/styled';
import { FaUserCircle } from 'react-icons/fa';

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;
const UserProfile = styled.img``;
const UserName = styled.div``;
const UserFollower = styled.div`
  position: relative;
  bottom: -0.3rem;
  text-align: end;
  font-size: 0.7rem;
`;

const UserInfo = ({ isFollwer = false, ...props }) => {
  return (
    <UserInfoWrapper {...props}>
      <FaUserCircle />
      <UserName>송인재</UserName>
      {isFollwer && <UserFollower>114 Follwer</UserFollower>}
    </UserInfoWrapper>
  );
};

export default UserInfo;
