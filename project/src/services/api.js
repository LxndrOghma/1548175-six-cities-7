import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const token = localStorage.getItem('token') ?? '';

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSucces = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSucces, onFail);

  return api;
};
