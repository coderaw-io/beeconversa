import { storageKeys } from "@/config/storage-keys";
import { isAuthenticated } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get(storageKeys.accessToken)?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Token not .found!" }, { status: 401 });
  }

  const loggedUser = await isAuthenticated();
  if (!loggedUser) return null;

  return NextResponse.json({ token: accessToken, userDetails: loggedUser  });
}