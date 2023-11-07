import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage, RegisterPage, AddGoalPage, GoalPage, EditGoalPage } from '../pages';

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
        path: 'addgoal',
        element: <AddGoalPage />,
      },
      {
        path: 'goal',
        element: <GoalPage />,
      },
      {
        path: 'editgoal',
        element: <EditGoalPage />,
      },
    ],
  },
]);
