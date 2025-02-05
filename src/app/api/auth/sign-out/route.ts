import { storageKeys } from "@/config/storage-keys";
import { NextResponse } from "next/server";

export async function POST() {
  const response = new NextResponse(null, { status: 204 });

  response.cookies.delete(storageKeys.accessToken);
  response.cookies.delete(storageKeys.refreshToken);
  response.cookies.delete(storageKeys.userFirstName);
  response.cookies.delete(storageKeys.userLastName);
  response.cookies.delete(storageKeys.userEmail);

  return response;
}