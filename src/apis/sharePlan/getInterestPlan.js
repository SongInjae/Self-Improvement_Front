import { axiosClient } from '../axiosClient';

const getInterestPlan = async ({ interests }) => {
  const { data } = await axiosClient.get('api/schedule/findByInterests', {
    params: { interests },
  });

  return data;
};

export default getInterestPlan;
