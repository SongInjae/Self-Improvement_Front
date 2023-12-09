import { axiosClient } from '../axiosClient';

const postUpload = async ({ content, imageUrl, tag }) => {
  const { data } = await axiosClient.post('/api/articles', {
    content,
    imageUrl,
    tag,
  });
};

export default postUpload;
