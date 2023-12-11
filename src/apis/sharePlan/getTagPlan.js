import { axiosClient } from '../axiosClient';

const getTagPlan = async ({ tags }) => {
  const { data } = await axiosClient.get('api/schedule/findByTags', {
    params: { tags },
  });

  return data;
};

export default getTagPlan;
