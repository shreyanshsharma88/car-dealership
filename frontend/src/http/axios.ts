import axios from 'axios';
import { toast } from 'react-toastify';

const authAxios = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message || 'Something went wrong. Please try again.';
    toast.error(message);
    return Promise.reject(error);
  }
);

export default authAxios;
