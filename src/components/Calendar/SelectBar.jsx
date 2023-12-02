import React, { useContext, useRef } from 'react';
import styled from '@emotion/styled';
import CalendarContext from '../../context/CalendarContext';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 1px;
  height: 48px;
`;
const SelectStyled = styled.select`
  position: absolute;
  appearance: none;
  padding: 10px 12px;
  font-size: 24px;
  cursor: pointer;
  font-family: 'MainText';
  outline: none;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 1px 1px 0px rgba(0, 14, 51, 0.05);
  background: url('src/assets/image/dropdownArrow.svg') no-repeat 90% 50%;
  background-color: white;
  transform: translate(-50%);

  &:first-child {
    left: 40%;
  }
  &:last-child {
    left: 60%;
  }
`;

const SelectBar = () => {
  const { state, action } = useContext(CalendarContext);
  const { month, year } = state;
  const { setMonth, setYear } = action;

  const todayYear = new Date().getUTCFullYear();
  const monthBox = useRef();
  const yearBox = useRef();

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const years = Array.from({ length: 100 }, (_, idx) => todayYear - 50 + idx);

  const monthOptions = months.map((month, index) => (
    <option key={index} value={month}>
      {month}
    </option>
  ));
  const yearOptions = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    monthBox.current.size = 1;
    monthBox.current.blur();
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    yearBox.current.size = 1;
    yearBox.current.blur();
  };

  return (
    <>
      <Wrapper>
        <SelectStyled
          ref={monthBox}
          onFocus={() => (monthBox.current.size = 5)}
          onBlur={() => (monthBox.current.size = 1)}
          value={month}
          onChange={handleMonthChange}
        >
          {monthOptions}
        </SelectStyled>
        <SelectStyled
          ref={yearBox}
          onFocus={() => (yearBox.current.size = 5)}
          onBlur={() => (yearBox.current.size = 1)}
          value={year}
          onChange={handleYearChange}
        >
          {yearOptions}
        </SelectStyled>
      </Wrapper>
    </>
  );
};

export default SelectBar;
