import { axiosClient } from '../axiosClient';

const postRegister = async ({ name, email, password }) => {
  const { data } = await axiosClient.post('/api/join', {
    name,
    email,
    password,
  });

  if (!data.token) {
    if (data.email) throw new Error(data.email);
    else if (data.password) throw new Error(data.password);
    else if (data.name) throw new Error(data.name);
    else throw new Error('회원가입에 실패했습니다.');
  }
};

export default postRegister;
