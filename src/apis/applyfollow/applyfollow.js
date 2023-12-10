import { axiosClient } from '../axiosClient';
import { transformDay } from '../../utils/transform';

const postApplyFollwer = async ({ id }) => {
  await axiosClient.post(`api/follow/${id}`);
};

export default postApplyFollwer;
