import axios from "axios";
import identity from "lodash/identity";
import { AuthResponse } from "../types/auth";

export const BASE_URL = "http://localhost:5000/api";
const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});

api.interceptors.response.use(identity, async (e) => {
  const originalRequest = e.config;
  if (e.response.status === 401) {
    try {
      const response = await axios.get<AuthResponse>(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      return api.request(originalRequest);
    } catch (e) {
      console.error("Failed to refresh on 401", e);
    }
  }
});

export default api;
