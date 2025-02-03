import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";
import { authApi } from "./axios";

export async function isAuthenticated(): Promise<null | DecodeTokenResponse> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(storageKeys.accessToken);

  if (!accessToken) {
    return null;
  }

  const decodedToken = await authApi.get<DecodeTokenResponse>("/users/decode-token", {
    headers: {
      Authorization: `Bearer ${accessToken.value}`
    }
  });
  
  if (!decodedToken) {
    return null;
  }

  return decodedToken.data;
}