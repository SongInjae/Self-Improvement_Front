import styled from '@emotion/styled';
import React from 'react';
import UserInfo from '../UserInfo';

const MemosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: calc(100% - 6.5rem);
  overflow: auto;
  margin-top: 1rem;
  font-family: 'MainMedium';
`;
const Memo = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.25);
`;
const TodoList = styled.div``;
const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
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

const Memos = ({ posts }) => {
  console.log(posts);
  return (
    <MemosContainer>
      {posts &&
        posts.map((post) => (
          <Memo>
            <UserInfo
              userId={post?.userId}
              userName={post?.user}
              userProfileUrl={post?.profile}
              //userFollwer={post.follwerCount} TODO: follower 숫자 내려오면 주석 해제하기
            />
            <TodoList>
              <TodoWrapper>
                {post?.headlines?.map((headline) => (
                  <TodoItem>{headline}</TodoItem>
                ))}
              </TodoWrapper>
            </TodoList>
          </Memo>
        ))}
      <Memo>
        <UserInfo isFollwer />
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
