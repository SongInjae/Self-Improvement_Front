import { axiosClient } from '../axiosClient';
import { transformDay } from '../../utils/transform';

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
  await axiosClient.post('api/schedule/create', {
    headline: title,
    context: detail,
    time: alarmTime,
    isRepeat: Boolean(repeatDays),
    daysOfWeek: transformDay(repeatDays),
    repeatEndDate: lastDate,
    interests: [selectedInterest],
    tags,
    date,
  });
};

export default postTodayPlan;
