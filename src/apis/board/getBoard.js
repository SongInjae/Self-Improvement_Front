import { axiosClient } from '../axiosClient';

const getBoard = async ({ method }) => {
  const { data } = await axiosClient.get('api/articles', {
    params: { method },
  });

  return data;
};

export default getBoard;
