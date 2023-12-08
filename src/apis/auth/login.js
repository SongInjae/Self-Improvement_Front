import { axiosClient } from '../axiosClient';

const postLogin = async ({ email, password }) => {
  const { data } = await axiosClient.post('/api/login', { email, password });

  localStorage.setItem('token', data.token);
};

export default postLogin;
