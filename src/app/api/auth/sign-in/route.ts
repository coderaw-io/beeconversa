import { SignInResponse } from "@/@types/auth/sign-in";
import { storageKeys } from "@/config/storage-keys";
import { authApi } from "@/lib/axios";
import { loginSchema } from "@/schemas/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { success, error, data: formData } = loginSchema.safeParse(body);

  if (!success) {
    return NextResponse.json(
      { error: error.issues },
      { status: 400 },
    );
  }

  const { data } = await authApi.post<SignInResponse>("/users/login", formData);

  const response = new NextResponse(null, { status: 204 });

  response.cookies.set(
    storageKeys.accessToken,
    data.accessToken,
    {
      httpOnly: true,
      maxAge: data.expiresIn,
      path: '/',
      sameSite: 'strict',
      secure: true,
    }
  );

  response.cookies.set(
    storageKeys.refreshToken,
    data.refreshToken,
    {
      httpOnly: true,
      maxAge: data.refreshExpiresIn,
      path: '/',
      sameSite: 'strict',
      secure: true,
    }
  );

  return response;
}