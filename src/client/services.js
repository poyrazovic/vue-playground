import axios from 'axios';
import { router } from '../routes/router';

const API = 'https://reqres.in/api';
const headers = {
  'Content-Type': 'application/json',
};

const login = (username, password) => (
  axios.post(`${API}/login`, {
    username,
    password,
  }, {
    headers,
  }).then((res) => {
    localStorage.setItem('token', res.data.token);
    router.push('/dashboard');
  }).catch(err => err)
);

const logout = () => {
  localStorage.removeItem('token');
  router.push('/');
};

export const services = {
  login,
  logout,
};
