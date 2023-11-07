import { axiosClient } from '../axiosClient';

const postLogin = async ({ email, password }) => {
  await axiosClient.post('/api/login', { email, password });
};

export default postLogin;
