import React from 'react';
import { axiosClient } from '../axiosClient';

const getTodayPlan = async ({ date, userId }) => {
  const { data } = await axiosClient.get('api/schedule/scheduleByDate', {
    params: { Date: date, userId },
  });

  return data;
};

export default getTodayPlan;
