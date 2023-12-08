import axios from 'axios';
import { setToken } from './interceptor';

export const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://13.124.228.19:8080',
  withCredentials: true,
  timeout: 10000,
});

axiosClient.interceptors.request.use(setToken);
