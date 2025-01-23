import axios from "axios";

import { SignInResponse } from "@/@types/auth/sign-in";
import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";

export async function getAccessToken() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(storageKeys.accessToken);

  return accessToken;
}

export async function auth(): Promise<SignInResponse | null> {
  const accessToken = await getAccessToken();
  if (!accessToken) return null;

  try {
    const response = await axios.get("/api/auth/decode-token");
    if (!response) return null;

    return response.data;
  } catch {
    (await cookies()).delete(storageKeys.accessToken);
    return null;
  }
}