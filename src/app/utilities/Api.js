import axios from "axios";

const getAPIBaseUrl = "https://api.thecatapi.com/"

// Axios Instance
const Api = axios.create({
  baseURL: getAPIBaseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

Api.interceptors.request.use(
  async (config) => {
    config.headers['x-api-key'] = "live_3jGoZWgYT5QY7s9PMBJJhHo7rkzoGVTHVwMMJ20BPN1F3Dm6EA0AMqROZhTmJcOs"; 
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

export default Api;