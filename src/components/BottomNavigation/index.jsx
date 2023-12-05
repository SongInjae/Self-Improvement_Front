import React from 'react';
import styled from '@emotion/styled';
import Icon from '../common/Icon';
import { ORIGINAL_YELLOW } from '../../constants/color';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  height: 5rem;
  background-color: ${ORIGINAL_YELLOW};
  box-sizing: border-box;
`;
const IconStyled = styled(Icon)`
  cursor: pointer;
`;

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <IconStyled name="calendar" size={24} color="white" />
      <IconStyled name="hash" size={24} color="white" />
      <IconStyled name="plus-circle" size={36} color="white" />
      <IconStyled name="globe" size={24} color="white" />
      <IconStyled name="user" size={24} color="white" />
    </NavigationContainer>
  );
};

export default BottomNavigation;
