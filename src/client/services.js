import axios from 'axios';

const API = 'https://reqres.in/api';
const headers = {
  'Content-Type': 'application/json',
};

const login = (email, password) => (
  axios.post(`${API}/login`, {
    email,
    password,
  }, {
    headers,
  }).then((res) => {
    localStorage.setItem('token', res.data.token);
    this.$router.push('/dashboard');
  }).catch(err => err)
);

const logout = () => {
  localStorage.removeItem('token');
};

export const services = {
  login,
  logout,
};
