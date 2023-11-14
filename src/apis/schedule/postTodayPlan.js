import { axiosClient } from '../axiosClient';

const postTodayPlan = async ({
  title,
  detail,
  alarmTime,
  repeatDays,
  lastDate,
  selectedInterest,
  tags,
}) => {
  await axiosClient.post('api/todayPlan', {
    title,
    detail,
    alarmTime,
    repeatDays,
    lastDate,
    selectedInterest,
    tags,
  });
};

export default postTodayPlan;
