import styled from '@emotion/styled';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MemosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  font-family: 'MainMedium';
`;
// const Memo = styled.div`
//   position: relative;
//   width: 40%;
//   padding: 1rem;
//   border: 1rem solid gray inset;
//   box-shadow: 0px 0px 0px 4px #2d3648 inset;
// `;
const Memo = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.25);
`;
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
const TodoList = styled.div``;
const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: 'MainLight';
  font-size: 0.8rem;
`;
const TodoItem = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Memos = () => {
  return (
    <MemosContainer>
      <Memo>
        <UserInfoWrapper>
          <FaUserCircle />
          <UserName>송인재</UserName>
          <UserFollower>114 Follwer</UserFollower>
        </UserInfoWrapper>
        <TodoList>
          <TodoWrapper>
            <TodoItem>
              해커스 토익 풀기해커스 토익 풀기해커스 토익 풀기해커스 토익
              풀기해커스 토익 풀기
            </TodoItem>
            <TodoItem>헬스장 가기</TodoItem>
            <TodoItem>로그인 UI 구현하기</TodoItem>
          </TodoWrapper>
        </TodoList>
      </Memo>
    </MemosContainer>
  );
};

export default Memos;
