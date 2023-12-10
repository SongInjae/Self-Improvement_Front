import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import BottomNavigation from './components/BottomNavigation';
import { ColorContexttProvider } from './context/SettingColor';

const Background = styled.div`
  max-width: 425px;
  height: 100vh;
  border: 1px solid black;
  margin: 0 auto;
  position: relative;
`;

const App = () => {
  return (
    <ColorContexttProvider>
      <Background>
        <Outlet />
        <BottomNavigation />
      </Background>
    </ColorContexttProvider>
  );
};

export default App;
