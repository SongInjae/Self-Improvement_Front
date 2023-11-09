import { axiosClient } from '../axiosClient';

const postRegister = async ({ name, email, password }) => {
  await axiosClient.post('/api/join', { name, email, password });
};

export default postRegister;
