import React from 'react';
import styled from '@emotion/styled';

const WeekWrapper = styled.thead`
  width: 100%;
`;
const Days = styled.tr`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.th`
  padding: 10px 0;
`;

const Week = () => {
  const dayList = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];

  return (
    <WeekWrapper>
      <Days>
        {dayList.map((day) => (
          <Day key={day.toString()}>{day}</Day>
        ))}
      </Days>
    </WeekWrapper>
  );
};

export default Week;
