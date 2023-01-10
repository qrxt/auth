import usersApi from "../lib/axios";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/auth";

type AuthPromise = Promise<AxiosResponse<AuthResponse>>;

export default class AuthService {
  static async login(email: string, password: string): AuthPromise {
    return usersApi.post<AuthResponse>("/login", {
      email,
      password,
    });
  }

  static async register(email: string, password: string): AuthPromise {
    return usersApi.post<AuthResponse>("/register", {
      email,
      password,
    });
  }

  static async logout() {
    return usersApi.post<AuthResponse>("/logout");
  }
}
