import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import GoalComponent from './GoalComponent';

const GoalWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
margin-left: 10px;
`;

const AllGoalList = ({Goals}) => {
  return (
    <GoalWrapper className="GoalList">
      {Goals.map(todo => (
        <GoalComponent todo={todo} />
      ))}
    </GoalWrapper>
  );
};

export default AllGoalList;
