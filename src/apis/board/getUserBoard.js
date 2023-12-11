import { axiosClient } from '../axiosClient';

const getUserBoard = async ({ userId }) => {
  const { data } = await axiosClient(`api/userArticles/${userId}`);

  return data;
};

export default getUserBoard;
