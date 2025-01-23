import { storageKeys } from "@/config/storage-keys";
import { NextResponse } from "next/server";

export async function POST() {
  const response = new NextResponse(null, { status: 204 });

  response.cookies.delete(storageKeys.accessToken);
  response.cookies.delete(storageKeys.refreshToken);

  return response;
}