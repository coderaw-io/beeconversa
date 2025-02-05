import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";

export async function isAuthenticated(): Promise<null | string> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(storageKeys.accessToken)?.value;

  if (!accessToken) {
    return null;
  }
  
  return accessToken;
}