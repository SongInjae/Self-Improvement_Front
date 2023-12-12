import { axiosClient } from '../axiosClient';

const putUpdateMonthGoal = async ({
  id,
  updatedMonGoal,
  isDone,
}) => {
  console.log(isDone, 'api');
  const response = await axiosClient.put(`api/updateMonGoal/${id}`, {
    updatedMonGoal,
    isDone,
  });

  return response.data;
};

export default putUpdateMonthGoal;
