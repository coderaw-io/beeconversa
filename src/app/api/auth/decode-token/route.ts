import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import { env } from "@/config/env";
import { authApi } from "@/lib/axios";
import { NextResponse } from "next/server";

export async function GET() {
  const tenant = env.NEXT_PUBLIC_TENANT;

  if (!tenant) {
    return NextResponse.json({ error: "Tenant not found!" }, { status: 401 });
  }

  const response = await authApi.get<DecodeTokenResponse>(
    "/users/decode-token",
    {
      headers: {
        "Content-Type": "application/json",
        Tenant: `${tenant}`
      },
    }
  );

  return NextResponse.json(response.data, { status: 200 });
}