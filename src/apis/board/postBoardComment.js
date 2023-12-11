import React from 'react';
import { axiosClient } from '../axiosClient';

const postBoardComment = async ({ articleId, comment }) => {
  const { data } = await axiosClient.post(
    `api/articles/${articleId}/comments`,
    comment,
  );

  return data;
};

export default postBoardComment;
