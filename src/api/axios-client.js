import axios from 'axios';
import queryString from 'query-string';
import { userSetErrorMessageAction } from '../actions/user.action';
import history from '../history';
import store from '../store';

const errType = ['invalid', 'expired'];

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = JSON.parse(JSON.stringify(localStorage.getItem('token')));
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})

axiosClient.interceptors.response.use((response) => {
  return response.data;
}, (err) => {
  if (err.response.status === 401 && errType.includes(err.response.data.type)) {
    const { dispatch } = store;
    dispatch(userSetErrorMessageAction('Đã hết phiên làm việc!'));
    window.location.href = '/auth/sign-in';
    localStorage.removeItem('token');
  }
  return new Promise((resolve, reject) => {
    reject(err);
  });
});

export default axiosClient;