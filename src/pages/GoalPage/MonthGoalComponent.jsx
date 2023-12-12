import React from 'react';
import styled from '@emotion/styled';
import { ORIGINAL_YELLOW } from '../../constants/color';
import { useState } from 'react';
import { SlRocket } from 'react-icons/sl';
import { CgMoreAlt } from 'react-icons/cg';
import putUpdateMonthGoal from '../../apis/Goal/putUpdateMonthGoal';

const GoalComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const CompleteBox = styled.button`
  margin-top: -45px;
  margin-left: ${(props) => props.marginLeft || '0'}px;
  font-family: 'MainMedium';
  font-weight: bold;
  font-size: 17px;
  color: ${ORIGINAL_YELLOW};
  border-radius: 20px;
  border: 3px solid ${ORIGINAL_YELLOW};
  background-color: ${({ isClicked }) =>
    isClicked ? ORIGINAL_YELLOW : 'white'};
  width: 70px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const GoalBox = styled.div`
  margin-top: 20px;
  font-family: 'MainBold';
  color: ${({ isClicked }) => (isClicked ? 'white' : 'gray')};
  border-radius: 20px;
  border: 3px solid
    ${({ isClicked }) => (isClicked ? ORIGINAL_YELLOW : 'lightgray')};
  width: 350px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isClicked }) =>
    isClicked ? ORIGINAL_YELLOW : 'white'};
`;

const Icon = styled.button`
  cursor: pointer;
  color: white;
  background: none;
  border: none;
  padding: 0;
  margin-top: -44px;
  margin-left: 300px;
  &:hover {
    color: lightgray;
  }
`;

const MonthGoalComponent = ({ id, year, monthTodo, onDelete, monthIsDone }) => {
  const [isCompleted, setIsCompleted] = useState(monthIsDone);
  const [marginLeft, setMarginLeft] = useState(0);
  console.log('ll', id, monthIsDone);
  if (monthTodo === '') {
    console.log(id);
    onDelete(id);
    return null;
  }

  const handleIconClick = () => {
    const shouldDelete = window.confirm('삭제하시겠습니까?');
    if (shouldDelete) {
      onDelete(id); // Call the onDelete prop to delete the GoalComponent
    }
  };

  const handleCompleteBox= async () => {
    setMarginLeft(marginLeft === 0 ? 285 : 0);
    setIsCompleted(!isCompleted);

    try {
      // 여기서 해당 API를 호출하여 isDone을 서버에 업데이트
      const result = await putUpdateMonthGoal({
        id: id,
        updatedMonGoal: monthTodo,
        isDone: !monthIsDone, // 현재 상태의 반대값으로 업데이트
      });

      console.log('Result from server (Year Goal):', result);
    } catch (error) {
      console.error('목표 제출 중 오류:', error);
      console.log('자세한 Axios 응답:', error.response);
      // 에러가 발생했을 경우 처리
    }
  };

  return (
    <GoalComponentBox>
      <GoalBox isClicked={isCompleted}>
        {isCompleted ? 'C O M P L E T E ! ! !' : monthTodo}
      </GoalBox>
      <Icon onClick={handleIconClick}>
        <CgMoreAlt size={40} />
      </Icon>
      <CompleteBox
        marginLeft={marginLeft}
        onClick={handleCompleteBox}
      >
        <SlRocket size={30} />
      </CompleteBox>
    </GoalComponentBox>
  );
};

export default MonthGoalComponent;
