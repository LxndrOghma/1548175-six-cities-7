import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const TOKEN = 'token';

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem(TOKEN) ?? '';

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'x-token': token,
    },
  });

  const onSucces = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSucces, onFail);

  api.interceptors.request.use((request) => {
    request.headers = { 'x-token': localStorage.getItem(TOKEN) ?? '' };
    return request;
  });

  return api;
};
