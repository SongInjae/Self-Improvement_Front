import React, { useContext, useEffect, useState } from 'react';
import getTodayPlan from '../../apis/schedule/getTodayPlan';
import CalendarContext from '../../context/CalendarContext';
import { transformDate } from '../../utils/transform';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW, PASTEL_ORANGE } from '../../constants';
import { useNavigate } from 'react-router-dom';

const TodoWrapper = styled.div`
  position: relative;
  display: flex;
`;
const TodoItem = styled.div`
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
const Checkbox = styled.div`
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

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();
  const { state } = useContext(CalendarContext);
  const { selectDay } = state;

  useEffect(() => {
    const getData = async () => {
      const data = await getTodayPlan({ date: transformDate(selectDay) });
      setTodoList(data);
    };

    getData();
  }, [selectDay]);
  return (
    <>
      {todoList.map((item, idx) => (
        <TodoWrapper key={item.title}>
          <TodoItem check={item.check}>{item.title}</TodoItem>
          <Checkbox check={item.check} />
        </TodoWrapper>
      ))}
      <AddTodo onClick={() => navigate('/todayplan')}>+</AddTodo>
    </>
  );
};

export default TodoList;
