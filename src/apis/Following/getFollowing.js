import React from 'react';
import { axiosClient } from '../axiosClient';

const getFollowing = async ({ userId }) => {
  const { data } = await axiosClient.get(`api/followee/${userId}`);
  return data;
};

export default getFollowing;
