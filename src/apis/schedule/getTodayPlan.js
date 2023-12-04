import React from 'react';
import { axiosClient } from '../axiosClient';

const getTodayPlan = async ({ date }) => {
  const { data } = await axiosClient.get(`api/todayPlan/${date}`);

  return data;
};

export default getTodayPlan;
