import { axiosClient } from '../axiosClient';

const putProfileEdit = async ({
  memberName,
  profileImageUrl,
  selfIntroduction,
}) => {
  await axiosClient.put('/api/myinfo', {
    memberName,
    profileImageUrl,
    selfIntroduction,
  });
};

export default putProfileEdit;
