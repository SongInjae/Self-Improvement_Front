import { axiosClient } from '../axiosClient';

const getTagPlan = ({ tags }) => {
  const { data } = axiosClient.get('api/schedule/findByTags', {
    params: { tags },
  });

  return data;
};

export default getTagPlan;
