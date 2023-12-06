import styled from '@emotion/styled';
import React from 'react';
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import { FaUserCircle } from 'react-icons/fa';
import { BsFillSendFill } from 'react-icons/bs';

const PostCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const HeaderStyled = styled(Header)`
  border-bottom: 1px solid gray;
`;
const UserCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  height: calc(100% - 16rem);
  margin: 1rem auto;
  overflow: auto;
`;
const UserCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const UserComment = styled.div``;
const SendCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;
const SendInput = styled.input`
  flex-grow: 1;
  height: 2rem;
  padding-left: 1rem;
  border: none;
  outline: none;
  font-size: 1.2rem;
`;
const SendButton = styled(BsFillSendFill)`
  cursor: pointer;
`;

const PostCommentPage = () => {
  return (
    <PostCommentContainer>
      <HeaderStyled title="댓글" isPrev isKorean />
      <UserCommentWrapper>
        <UserCommentItem>
          <UserInfo />
          <UserComment>안녕하세요</UserComment>
        </UserCommentItem>
      </UserCommentWrapper>
      <SendCommentWrapper>
        <FaUserCircle />
        <SendInput />
        <SendButton />
      </SendCommentWrapper>
    </PostCommentContainer>
  );
};

export default PostCommentPage;
