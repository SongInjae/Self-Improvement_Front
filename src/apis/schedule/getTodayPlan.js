import React from 'react';
import { axiosClient } from '../axiosClient';

const getTodayPlan = async ({ date, userId }) => {
<<<<<<< HEAD
  const { data } = await axiosClient.get('/api/schedule/scheduleByDate', {
=======
  const { data } = await axiosClient.get('api/schedule/scheduleByDate', {
>>>>>>> b0d6c92 (fix: 스케줄 확인 API 변동)
    params: { Date: date, userId },
  });

  return data;
};

export default getTodayPlan;
