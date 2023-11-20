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
  return (
    <Wrapper>
      <SelectBar />
      <TableWrapper>
        <Week />
        <Days />
      </TableWrapper>
    </Wrapper>
  );
};

export default Calendar;
