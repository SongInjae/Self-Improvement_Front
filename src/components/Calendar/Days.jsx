import React from 'react';
import styled from '@emotion/styled';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isToday,
  isSameDay,
} from 'date-fns';
import { ORIGINAL_YELLOW } from '../../constants';

const Wrapper = styled.tbody`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  margin-top: 10px;
`;
const Week = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.td`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-radius: 6px;
  box-shadow: 0px 1px 1px 0px rgba(0, 14, 51, 0.05);
  cursor: pointer;

  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled }) => disabled && 'lightgray'};

  background-color: ${({ today }) => today && `${ORIGINAL_YELLOW}`};
  color: ${({ today }) => today && 'white'};
  border-radius: ${({ today }) => today && '100px'};

  background-color: ${({ selectDay }) => selectDay && `${ORIGINAL_YELLOW}`};
`;

const Days = ({ currentMonth, selectDay, onClick }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const firstDay = startOfWeek(monthStart);
  const lastDay = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });

  const weeks = [];
  let week = [];

  days.forEach((day) => {
    const isDisabled = day.getMonth() !== currentMonth.getMonth();

    week.push(
      <Day
        key={day.toString()}
        disabled={isDisabled}
        today={isToday(day)}
        selectDay={isSameDay(day, selectDay)}
        onClick={onClick}
      >
        {format(day, 'd')}
      </Day>,
    );

    if (week.length === 7) {
      weeks.push(<Week key={day.toString()}>{week}</Week>);
      week = [];
    }
  });

  return <Wrapper>{weeks}</Wrapper>;
};

export default Days;