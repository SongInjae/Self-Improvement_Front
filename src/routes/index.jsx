import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import {
  LoginPage,
  RegisterPage,
  MainPage,
  TodayPlanPage,
  SharePlanPage,
  PostPage,
  PostDetailPage,
} from '../pages';

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
      {
        path: 'board',
        element: <PostPage />,
      },
      {
        path: 'board/detail/:id',
        element: <PostDetailPage />,
      },
    ],
  },
]);
