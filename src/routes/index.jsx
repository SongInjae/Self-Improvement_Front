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
  AddGoalPage,
  GoalPage,
  UserPage,
  SettingPage,
  PwEditPage,
  PostUploadPage,
  ProfileEditPage,
  PostCommentPage,
  OUserPage,
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
        path: 'addgoal',
        element: <AddGoalPage />,
      },
      {
        path: 'goal',
        element: <GoalPage />,
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
      {
        path: 'board/detail/:id/comment',
        element: <PostCommentPage />,
      },
      {
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'setting',
        element: <SettingPage />,
      },
      {
        path: 'pwedit',
        element: <PwEditPage />,
      },
      {
        path: 'postupload',
        element: <PostUploadPage />,
      },
      {
        path: 'profileedit',
        element: <ProfileEditPage />,
      },
      {
        path: 'otheruser',
        element: <OUserPage />,
      },
    ],
  },
]);
