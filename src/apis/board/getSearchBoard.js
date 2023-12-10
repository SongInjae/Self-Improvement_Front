import { axiosClient } from '../axiosClient';

const getSearchBoard = async ({ keyword, method }) => {
  const { data } = await axiosClient.get('api/articles/search', {
    params: {
      keyword,
      method,
    },
  });

  return data;
};

export default getSearchBoard;
