import { axiosClient } from '../axiosClient';

const postTodayPlan = async ({
  title,
  detail,
  alarmTime,
  repeatDays,
  lastDate,
  selectedInterest,
  tags,
  date,
}) => {
  await axiosClient.post('api/todayPlan', {
    title,
    detail,
    alarmTime,
    repeatDays,
    lastDate,
    selectedInterest,
    tags,
    date,
  });
};

export default postTodayPlan;
