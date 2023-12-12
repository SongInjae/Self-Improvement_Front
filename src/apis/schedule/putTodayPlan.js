import React from 'react';
import { axiosClient } from '../axiosClient';

const putTodayPlan = async ({ data, selectDay }) => {
  console.log(data);
  await axiosClient.put(`/api/schedule/${data.scheduleId}`, {
    date: selectDay,
    headline: data.headline,
    context: data.context,
    time: data.time,
    isRepeat: data.isRepeat,
    repeatEndDate: data.repeatEnd,
    daysOfWeek: data.repeatDay,
    interests: data.interest,
    tags: data.tag,
    isDone: data.isDone,
  });
};

export default putTodayPlan;
