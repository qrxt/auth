import api, { BASE_URL } from "../lib/axios";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../types/auth";

type AuthPromise = Promise<AxiosResponse<AuthResponse>>;

export default class AuthService {
  static async login(email: string, password: string): AuthPromise {
    return api.post<AuthResponse>("/login", {
      email,
      password,
    });
  }

  static async register(email: string, password: string): AuthPromise {
    return api.post<AuthResponse>("/register", {
      email,
      password,
    });
  }

  static async logout() {
    return api.post<AuthResponse>("/logout");
  }

  // checkAuth uses it's own axios instance to avoid interceptors
  static async checkAuth() {
    return axios.get<AuthResponse>(`${BASE_URL}/refresh`, {
      withCredentials: true,
    });
  }
}
