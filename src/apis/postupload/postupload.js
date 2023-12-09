import { axiosClient } from '../axiosClient';

const postUpload = async ({ content, imageUrl, tag }) => {
  const { data } = await axiosClient.post('/api/articles', {
    content,
    imageUrl,
    tag,
  });

  localStorage.setItem('token', data.token);
};

export default postUpload;
