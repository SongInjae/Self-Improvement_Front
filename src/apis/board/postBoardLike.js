import React from 'react';
import { axiosClient } from '../axiosClient';

const postBoardLike = async ({ articleId }) => {
  await axiosClient.post(`api/articles/${articleId}/like`);
};

export default postBoardLike;
