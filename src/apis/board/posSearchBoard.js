import React from 'react';
import { axiosClient } from '../axiosClient';

const posSearchBoard = async ({ tags }) => {
  const { data } = await axiosClient.get(`api/articles/search/${tags}`);

  return data;
};

export default posSearchBoard;
