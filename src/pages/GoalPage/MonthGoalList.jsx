import React from 'react';
import styled from '@emotion/styled';
import MonthGoalComponent from './MonthGoalComponent';

const GoalWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
margin-left: 10px;
`;

const MonthGoalList = ({monthGoals, onDelete}) => {
  return (
    <GoalWrapper className="GoalList">
      {monthGoals && monthGoals.map(monthGoal => (
        <MonthGoalComponent 
          id={monthGoal.id}
          year={monthGoal.year}
          monthTodo={monthGoal.monGoal}
          monthIsDone={monthGoal.isDone} 
          onDelete={onDelete}
        />
      ))}
    </GoalWrapper>
  );
};

export default MonthGoalList;
