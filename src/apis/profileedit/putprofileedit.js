import { axiosClient } from '../axiosClient';

const putProfileEdit = async ({
  memberName,
  profileImageUrl,
  selfIntroduction,
}) => {
  const formData = new FormData();
  const dataRequest = {
    memberName,
    selfIntroduction,
  };
  const data = new Blob([JSON.stringify(dataRequest)], {
    type: 'application/json',
  });
  formData.append('data', data);
  formData.append('image', profileImageUrl);

  await axiosClient.put('/api/myinfo', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default putProfileEdit;
