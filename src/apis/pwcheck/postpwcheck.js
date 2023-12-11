import { axiosClient } from '../axiosClient';

const postPwCheck = async ({ password }) => {
  const { data } = await axiosClient.post('/api/check-password', {
    password,
  });

  return data;
};

export default postPwCheck;
