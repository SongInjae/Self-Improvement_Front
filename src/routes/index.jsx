import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage, RegisterPage, MainPage } from '../pages';
import TodayPlanPage from '../pages/TodayPlanPage';
import SharePlanPage from '../pages/SharePlanPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'todayplan',
        element: <TodayPlanPage />,
      },
      {
        path: 'shareplan',
        element: <SharePlanPage />,
      },
    ],
  },
]);
