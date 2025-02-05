import axios from "axios";

import { GetAccessTokenResponse } from "@/@types/auth/decode-token";
import { SignInRequest, SignInResponse } from "@/@types/auth/sign-in";
import { storageKeys } from "@/config/storage-keys";
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

      return data;
    } catch (error) {
      console.log("Auth error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async getAccessToken() {
    try {
      const { data } = await axios.get<GetAccessTokenResponse>("/api/auth/get-token");

      localStorage.setItem(storageKeys.userFirstName, data.userDetails.firstName);
      localStorage.setItem(storageKeys.userLastName, data.userDetails.lastName);
      localStorage.setItem(storageKeys.userEmail, data.userDetails.email);
      
      return data.token;
    } catch (error) {
      console.error("Failed to fetch token:", error);
      return null;
    }
  }
}