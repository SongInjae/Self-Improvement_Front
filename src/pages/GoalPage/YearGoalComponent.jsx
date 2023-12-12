import React from 'react';
import styled from '@emotion/styled';
import postCreateYearGoal from '../../apis/Goal/postCreateYearGoal';
import putUpdateYearGoal from '../../apis/Goal/putUpdateYearGoal';
import { ORIGINAL_YELLOW } from '../../constants/color';
import { useState } from 'react';
import { SlRocket } from 'react-icons/sl';
import { CgMoreAlt } from 'react-icons/cg';
import { id } from 'date-fns/esm/locale';

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

const DetailGoal = styled.div`
  padding: 15px;
  margin-top: -1px;
  font-family: 'Roboto', sans-serif;
  color: gray;
  border-radius: 20px;
  border: 3px solid lightgray;
  width: 350px;
  height: 250px;
  box-sizing: border-box;
`;

const DetailButton = styled.button`
  margin-top: -2px;
  margin-left: 38%;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  border: 3px solid lightgray;
  width: 80px;
  padding: 4px;
  cursor: pointer;
`;

const ShortHorizontalLine = styled.hr`
  margin-top: -8px;
  margin-left: 43.5%;
  border-top: 2px solid lightgray;
  width: 40px;
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

const YearGoalComponent = ({ id, yearTodo, matchingMonthGoals, onDelete, yearIsDone}) => {
  if (yearTodo === '') {
    onDelete(id);
    return null;
  }
  const [isCompleted, setIsCompleted] = useState(yearIsDone);
  const [marginLeft, setMarginLeft] = useState(0);
  const [visibleDetail, setVisibleDetail] = useState(false);

  const monthGoal = Array(12).fill(null).map(() => []);
  
  // matchingMonthGoals를 순회하면서 month에 따라 monthGoal 배열에 저장
  // matchingMonthGoals.forEach(({ month, monGoal }) => {
  //   monthGoal[month - 1].push(monGoal);
  // });

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
      const result = await putUpdateYearGoal({
        id,
        updatedYearGoal: yearTodo,
        isDone: !yearIsDone, // 현재 상태의 반대값으로 업데이트
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
        {isCompleted ? 'C O M P L E T E ! ! !' : yearTodo}
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
      { monthGoal == null
        ? null
        : visibleDetail && (
            <DetailGoal>
              1월: {monthGoal[0]} <br/>
              2월: {monthGoal[1]} <br/>
              3월: {monthGoal[2]} <br/>
              4월: {monthGoal[3]} <br/>
              5월: {monthGoal[4]} <br/>
              6월: {monthGoal[5]} <br/>
              7월: {monthGoal[6]} <br/>
              8월: {monthGoal[7]} <br/>
              9월: {monthGoal[8]} <br/>
              10월: {monthGoal[9]} <br/>
              11월: {monthGoal[10]} <br/>
              12월: {monthGoal[11]} <br/>
            </DetailGoal>
          ) && (
            <DetailButton onClick={() => setVisibleDetail(!visibleDetail)} />
          ) && <ShortHorizontalLine />}
    </GoalComponentBox>
  );
};

export default YearGoalComponent;
