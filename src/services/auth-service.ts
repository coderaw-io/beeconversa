import { SignInRequest, SignInResponse } from "@/@types/auth/sign-in";
import { authApi } from "@/lib/axios";

export class AuthService {
  static async signIn({ 
    username,
    password
   }: SignInRequest) {
    try {
      const formData = {
        username: username,
        password: password
      };

      const { data } = await authApi.post<SignInResponse>("/users/login", formData);

      localStorage.setItem("beeconversa:access_token", data.accessToken);
      localStorage.setItem("beeconversa:refresh_token", data.refreshToken);

      return data;
    } catch (error) {
      console.log("Auth error:", error);
      throw new Error("Internal server error!");
    }
  }
}