import { axiosClient } from '../axiosClient';

const deleteBoardComment = async ({ articleId, commentId }) => {
  await axiosClient.delete(`/api/articles/${articleId}/comments/${commentId}`);
};

export default deleteBoardComment;
