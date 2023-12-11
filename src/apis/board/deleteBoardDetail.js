import { axiosClient } from '../axiosClient';

const deleteBoardDetail = async ({ articleId }) => {
  await axiosClient.delete(`/api/articles/${articleId}`);
};

export default deleteBoardDetail;
