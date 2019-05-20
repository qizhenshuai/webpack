import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : ''
});

export default instance
