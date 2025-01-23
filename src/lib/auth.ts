import axios from "axios";

import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";

export async function getAccessToken() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(storageKeys.accessToken);

  return accessToken;
}

export async function isAuthenticated(): Promise<null | DecodeTokenResponse> {
  const token = await getAccessToken();
  if (!token) return null;

  try {
    const response = await axios.get("/api/auth/decode-token");
    if (!response) return null;

    const decodedToken = response.data;

    return decodedToken;
  } catch {
    return null;
  }
}