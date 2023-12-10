import { axiosClient } from '../axiosClient';

const postpostUpload = async ({ content, imageUrl, tag }) => {
  const formData = new FormData();
  const dataRequest = {
    content,
    tag,
  };
  const data = new Blob([JSON.stringify(dataRequest)], {
    type: 'application/json',
  });
  formData.append('data', data);
  formData.append('image', imageUrl);

  await axiosClient.post('/api/articles', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default postpostUpload;
