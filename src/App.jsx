import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import BottomNavigation from './components/BottomNavigation';

const Background = styled.div`
  max-width: 425px;
  height: 100vh;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Background>
      <Outlet />
      <BottomNavigation />
    </Background>
  );
};

export default App;
