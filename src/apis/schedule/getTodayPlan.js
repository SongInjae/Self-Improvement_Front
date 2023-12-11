import React from 'react';
import { axiosClient } from '../axiosClient';

const getTodayPlan = async ({ date }) => {
  const { data } = await axiosClient.get('api/schedule/scheduleByDate', {
    params: { selectedDate: date },
  });

  return data;
};

export default getTodayPlan;
