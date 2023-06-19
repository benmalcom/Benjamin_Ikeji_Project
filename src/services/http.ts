import axios, { AxiosRequestConfig } from 'axios';
import { API_BASE_URL, API_REQUEST_KEY } from 'config/default';

const defaultOptions: AxiosRequestConfig = {
  baseURL: `${API_BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  },
  method: 'GET',
  timeout: 10000,
};

// Create instance
export const instance = axios.create(defaultOptions);

instance.interceptors.request.use(
  config => {
    if (API_REQUEST_KEY) {
      config.headers.Authorization = `Bearer ${API_REQUEST_KEY}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
// Add a response interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    if (error === null) throw new Error('Unrecoverable error!! Error is null!');
    if (axios.isCancel(error)) throw error;
    if (error.response) {
      if (error.code === 'ECONNABORTED')
        throw new Error('Network timeout, please try again');

      throw error;
    }
    // Do nothing for canceled requests
    else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      throw new Error('No response was received');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw error;
    }
  }
);
export default instance;

export const createRequest = (config: AxiosRequestConfig) => instance(config);
