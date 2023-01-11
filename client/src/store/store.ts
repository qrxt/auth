import axios from "axios";
import { makeAutoObservable } from "mobx";
import { AuthService } from "../services";
import { AuthResponse } from "../types/auth";
import { UserDTO } from "../types/user";

export default class Store {
  user: UserDTO | null = null;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(newStatus: boolean) {
    this.isAuth = newStatus;
  }

  setUser(user: UserDTO | null) {
    this.user = user;
  }

  setIsLoading(newStatus: boolean) {
    this.isLoading = newStatus;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      console.log("login:", response);
      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error("Failed to log in", e);
    }
  }

  async register(email: string, password: string) {
    try {
      const response = await AuthService.register(email, password);
      console.log("register:", response);
      localStorage.setItem("token", response.data.accessToken);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error("Failed to register", e);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser(null);
    } catch (e) {
      console.error("Failed to log out", e);
    }
  }

  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await AuthService.checkAuth();
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.error("Failed to refresh", e);
    } finally {
      this.setIsLoading(false);
    }
  }
}
