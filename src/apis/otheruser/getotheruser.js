import React from 'react';
import { axiosClient } from '../axiosClient';

const getOtherUserPage = async ({ Id }) => {
  const { data } = await axiosClient.get(`api/userinfo/${Id}`);
  return data;
};

export default getOtherUserPage;
