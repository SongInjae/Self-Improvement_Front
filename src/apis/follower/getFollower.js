import React from 'react';
import { axiosClient } from '../axiosClient';

const getFollower = async ({ userId }) => {
  const { data } = await axiosClient.get(`api/follower/${userId}`);
  return data;
};

export default getFollower;
