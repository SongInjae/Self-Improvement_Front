import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import ColorContext from '../../context/SettingColor';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  height: 5rem;
  background-color: ${({ color }) => color};
  box-sizing: border-box;
`;

const IconStyled = styled(Icon)`
  cursor: pointer;
`;

const BottomNavigation = () => {
  const navigate = useNavigate();

  const navigateToGoal = () => {
    navigate('/goal');
  };

  const navigateToSharePlan = () => {
    navigate('/shareplan');
  };

  const navigateToBoard = () => {
    navigate('/board');
  };

  const navigateToTodayPlan = () => {
    navigate('/todayplan');
  };

  const navigateToUser = () => {
    navigate('/user');
  };
  const { state, action } = useContext(ColorContext);
  return (
    <NavigationContainer color={state.color}>
      <IconStyled
        name="calendar"
        onClick={navigateToGoal}
        size={24}
        color="white "
      />
      <IconStyled
        name="hash"
        onClick={navigateToSharePlan}
        size={24}
        color="white"
      />
      <IconStyled
        name="plus-circle"
        onClick={navigateToTodayPlan}
        size={36}
        color="white"
      />
      <IconStyled
        name="globe"
        size={24}
        color="white"
        onClick={navigateToBoard}
      />
      <IconStyled
        name="user"
        onClick={navigateToUser}
        size={24}
        color="white"
      />
    </NavigationContainer>
  );
};

export default BottomNavigation;
