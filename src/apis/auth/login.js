import { axiosClient } from '../axiosClient';

const postLogin = async ({ email, password }) => {
  const { data } = await axiosClient.post('/api/login', { email, password });
  if (!data.token) {
    if (data.email) throw new Error(data.email);
    else if (data.password) throw new Error(data.password);
    else throw new Error('로그인에 실패했습니다.');
  }
  localStorage.setItem('token', data.token);
};

export default postLogin;
