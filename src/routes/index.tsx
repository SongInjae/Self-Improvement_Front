import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { LoginPage, SignUpPage } from '../pages';

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
        path: 'SignUp',
        element: <SignUpPage />,
      },
    ],
  },
]);
