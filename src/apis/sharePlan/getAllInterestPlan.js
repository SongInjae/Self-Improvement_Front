import React from 'react';
import { axiosClient } from '../axiosClient';

const getAllInterestPlan = async () => {
  const { data } = await axiosClient.get('/api/schedule/findAllSchedules');

  return data;
};

export default getAllInterestPlan;
