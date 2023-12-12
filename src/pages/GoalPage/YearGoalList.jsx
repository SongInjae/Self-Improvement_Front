import React from 'react';
import styled from '@emotion/styled';
import YearGoalComponent from './YearGoalComponent';
import { SlRocket } from 'react-icons/sl';

const GoalWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
margin-left: 10px;
`;

const YearGoalList = ({combinedGoals, onDelete}) => {
  console.log('c', combinedGoals);
  if (!combinedGoals || !Array.isArray(combinedGoals)) {
    // combinedGoals이 정의되지 않았거나 배열이 아닌 경우 처리
    return <SlRocket size={200} style={{ color: 'Gainsboro', marginLeft: '20%', marginTop: '36%' }} />
  }
  
  return (
    <GoalWrapper className="GoalList">
      {combinedGoals && combinedGoals.map(({ id, yearGoal, matchingMonthGoals, isDone }) => (
        <YearGoalComponent
          id = {id}
          yearTodo={yearGoal}
          matchingMonthGoals={matchingMonthGoals}
          onDelete={onDelete}
          yearIsDone={isDone}
        />
      ))}
    </GoalWrapper>
  );
};

export default YearGoalList;
