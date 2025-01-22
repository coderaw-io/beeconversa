import { storageKeys } from "@/config/storage-keys";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get(storageKeys.accessToken)?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Token not found!" }, { status: 401 });
  }

  return NextResponse.json({ token: accessToken });
}