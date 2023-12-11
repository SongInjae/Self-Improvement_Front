import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import getTodayPlan from '../../apis/schedule/getTodayPlan';
import CalendarContext from '../../context/CalendarContext';
import { transformDate } from '../../utils/transform';
import styled from '@emotion/styled';
import ColorContext from '../../context/SettingColor';

const TodoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  box-sizing: border-box;
  background-color: ${({ color }) => color};
  opacity: ${({ check }) => (check ? '1' : '0.4')};
`;
const TodoItem = styled.div`
  color: white;
  font-family: 'MainBold';
`;
const Checkbox = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 50%;
  transform: translateY(50%);
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ color }) => color};
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
  color: ${({ color }) => color};
  background-color: rgba(232, 232, 232, 0.6);
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();
  const { state } = useContext(CalendarContext);
  const { state: colorState } = useContext(ColorContext);
  const { selectDay } = state;

  useEffect(() => {
    const getData = async () => {
      const data = await getTodayPlan({ date: transformDate(selectDay) });

      if (data) setTodoList(data.schedules);
    };

    getData();
  }, [selectDay]);

  const handleCheckChange = (idx) => {
    setTodoList((prevState) => {
      const newState = [...prevState];
      newState[idx] = {
        ...newState[idx],
        isDone: !prevState[idx].isDone,
      };

      return newState;
    });
  };
  return (
    <>
      {todoList &&
        todoList.map((item, idx) => (
          <TodoWrapper
            key={item.headline}
            check={item.isDone}
            color={colorState.color}
          >
            <TodoItem>{item.headline}</TodoItem>
            <Checkbox
              check={item.isDone}
              color={colorState.color}
              onClick={() => handleCheckChange(idx)}
            />
          </TodoWrapper>
        ))}
      <AddTodo color={colorState.color} onClick={() => navigate('/todayplan')}>
        +
      </AddTodo>
    </>
  );
};

export default TodoList;
