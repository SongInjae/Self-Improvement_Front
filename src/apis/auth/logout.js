import { axiosClient } from '../axiosClient';

const logout = async () => {
  await axiosClient.post('/api/logout');
};

export default logout;
