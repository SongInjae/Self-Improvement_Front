import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
`

const App = () => {
  return (
    <Background><Outlet /></Background>
  );
};

export default App;