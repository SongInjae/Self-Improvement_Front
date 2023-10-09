import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage, RegisterPage } from '../pages';

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
    ],
  },
]);
