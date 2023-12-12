import { axiosClient } from '../axiosClient';

const putUpdateYearGoal = async ({
  id,
  updatedYearGoal,
  isDone,
}) => {
  const response = await axiosClient.put(`api/updateYearGoal/${id}`, {
    updatedYearGoal,
    isDone,
  });

  return response.data;
};

export default putUpdateYearGoal;
