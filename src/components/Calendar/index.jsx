import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import Week from './Week';
import Days from './Days';
import SelectBar from './SelectBar';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'MainText';
  margin-top: 10px;
`;
const TableWrapper = styled.table`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Calendar = () => {
  const [current, setCurrent] = useState(new Date());
  const [selectDay, setSelectDay] = useState();
  const [month, setMonth] = useState(format(current, 'MMM'));
  const [year, setYear] = useState(format(current, 'yyyy'));

  useEffect(() => {
    const newDate = new Date(`${year}-${month}-01`);
    setCurrent(newDate);
  }, [month, year]);

  const handleDayClick = (e) => {
    setSelectDay(new Date(`${year}-${month}-${e.target.textContent}`));
  };

  return (
    <Wrapper>
      <SelectBar
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <TableWrapper>
        <Week />
        <Days
          currentMonth={current}
          selectDay={selectDay}
          onClick={handleDayClick}
        />
      </TableWrapper>
    </Wrapper>
  );
};

export default Calendar;
