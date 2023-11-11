import React from 'react';
import Calendar from '../../components/Calendar';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';

const MainContainer = styled.div``;
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  gap: 1rem;
  overflow: auto;
  margin: 1rem 0;
`;
const TodoWrapper = styled.div`
  position: relative;
  display: flex;
`;
const TodoItem = styled.div<{ check: boolean }>`
  width: 95%;
  height: 3rem;
  margin: 0 auto;
  padding-left: 1rem;
  line-height: 3rem;
  border-radius: 2rem;
  color: white;
  background-color: ${({ check }) => (check ? ORIGINAL_YELLOW : PASTEL_ORANGE)};
  box-sizing: border-box;
`;
const Checkbox = styled.div<{ check: boolean }>`
  position: absolute;
  right: 2rem;
  bottom: 50%;
  transform: translateY(50%);
  width: 1.5rem;
  height: 1.5rem;
  color: ${ORIGINAL_YELLOW};
  border-radius: 0.25rem;
  background-color: white;
  cursor: pointer;

  &::after {
    content: '✔︎';
    display: ${({ check }) => (check ? 'block' : 'none')};
    text-align: center;
    line-height: 1.5rem;
  }
`;
const AddTodo = styled.div`
  width: 95%;
  height: 3rem;
  margin: 0 auto;
  line-height: 3rem;
  border-radius: 2rem;
  color: ${ORIGINAL_YELLOW};
  background-color: rgba(232, 232, 232, 0.6);
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
`;

const MainPage = () => {
  const todo_list = [
    {
      todo: '영어단어 50개 외우기',
      check: true,
    },
    {
      todo: '"돈의 속성" 책 읽기',
      check: false,
    },
    {
      todo: '토익 책 한 단원 풀기',
      check: false,
    },
    {
      todo: '헬스장에서 1시간 운동하기',
      check: false,
    },
  ];
  return (
    <MainContainer>
      <Calendar />
      <TodoContainer>
        {todo_list.map((item) => (
          <TodoWrapper key={item.todo}>
            <TodoItem check={item.check}>{item.todo}</TodoItem>
            <Checkbox check={item.check} />
          </TodoWrapper>
        ))}
      </TodoContainer>
      <AddTodo>+</AddTodo>
    </MainContainer>
  );
};

export default MainPage;
