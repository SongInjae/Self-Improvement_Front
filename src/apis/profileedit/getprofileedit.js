import { axiosClient } from '../axiosClient';

const getProfileEdit = async () => {
  const { data } = await axiosClient.get('/api/myinfo', {});
  return data;
};

export default getProfileEdit;
