import { axiosClient } from '../axiosClient';

const putPassword = async ({ changePassword1, changePassword2 }) => {
  const data = await axiosClient.put('/api/change-password', {
    changePassword1,
    changePassword2,
  });
};

export default putPassword;
