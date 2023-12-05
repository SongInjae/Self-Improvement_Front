import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
<<<<<<< HEAD
import {
  LoginPage,
  RegisterPage,
  MainPage,
  TodayPlanPage,
  SharePlanPage,
  PostPage,
  AddGoalPage, GoalPage, EditGoalPage,
} from '../pages';
=======
import { LoginPage, RegisterPage, AddGoalPage, GoalPage, MainPage } from '../pages';
import TodayPlanPage from '../pages/TodayPlanPage';
>>>>>>> 8730d5e (feat: HAGYOUNG)

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
      {
        path: 'shareplan',
        element: <SharePlanPage />,
      },
      {
        path: 'board',
        element: <PostPage />,
      },
    ],
  },
]);
