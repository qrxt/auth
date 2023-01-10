import { UserDTO } from "./user";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: UserDTO;
}
