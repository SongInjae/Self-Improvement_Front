import React from 'react';
import { axiosClient } from '../axiosClient';

const getBoardDetail = async ({ articleId }) => {
  const { data } = await axiosClient.get(`api/articles/${articleId}`);

  return data;
};

export default getBoardDetail;
