import React from 'react';
import { axiosClient } from '../axiosClient';

const putTodayPlan = async ({ data }) => {
  console.log(data);
  await axiosClient.put(`/api/schedule/${data.scheduleId}`, {
    date: data.date,
    headline: data.headline,
    context: data.context,
    time: data.time,
    isRepeat: data.isRepeat,
    repeatEndDate: data.repeatEndDate,
    daysOfWeek: data.daysOfWeek,
    interests: data.interests,
    tags: data.tags,
    isDone: data.tags,
  });
};

export default putTodayPlan;
