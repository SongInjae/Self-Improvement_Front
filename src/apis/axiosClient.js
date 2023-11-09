import axios from 'axios';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  //baseURL: '',
  withCredentials: true,
  timeout: 10000,
});
