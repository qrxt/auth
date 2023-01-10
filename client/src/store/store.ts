import { makeAutoObservable } from "mobx";
import { AuthService } from "../services";
import { UserDTO } from "../types/user";

export default class Store {
  user: UserDTO | null = null;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: UserDTO | null) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
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
}
