import axios from "axios";

const BASE_URL = "http://localhost:5000";
const usersApi = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

usersApi.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});

export default usersApi;
