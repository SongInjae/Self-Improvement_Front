import { axiosClient } from '../axiosClient';

const postAddGoal = async ({
  year,
  yearGoal,
  monthGoals,
}) => {
  await axiosClient.post('api/addgoal', {
    year,
    yearGoal,
    monthGoals,
  });

  return response.data;
};

export default postAddGoal;
