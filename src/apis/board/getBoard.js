import { axiosClient } from '../axiosClient';

const getBoard = async () => {
  const { data } = await axiosClient.get('api/articles');

  return data;
};

export default getBoard;
