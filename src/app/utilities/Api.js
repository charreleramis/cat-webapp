import axios from "axios";

const getAPIBaseUrl = "http://127.0.0.1:5000/"

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
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

export default Api;