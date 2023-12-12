import { axiosClient } from '../axiosClient';

const postCreateYearGoal = async ({
  id,
  year,
  yearGoal,
  isDone,
}) => {
  const response = await axiosClient.post('api/createYearGoal', {
    id,
    year,
    yearGoal,
    isDone,
  });

  return response.data;
};

export default postCreateYearGoal;
