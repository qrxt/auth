import api from "../lib/axios";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/auth";
import { UserDTO } from "../types/user";

type UserPromise = Promise<AxiosResponse<UserDTO[]>>;

export default class AuthService {
  static async fetchUsers(): UserPromise {
    return api.get<UserDTO[]>("/users");
  }
}
