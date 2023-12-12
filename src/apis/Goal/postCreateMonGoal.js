import { axiosClient } from '../axiosClient';

const postCreateMonGoal = async ({
    id,
    year,
    month,
    monGoal,
    isDone,
}) => {
  const response = await axiosClient.post('api/createMonGoal', {
    id,
    year,
    month,
    monGoal,
    isDone,
  });

  return response.data;
};

export default postCreateMonGoal;
