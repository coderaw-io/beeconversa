import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import { SignInResponse } from "@/@types/auth/sign-in";
import { storageKeys } from "@/config/storage-keys";
import { authApi } from "@/lib/axios";
import { loginSchema } from "@/schemas/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { success, error, data: form } = loginSchema.safeParse(body);

  const signIn = { username: form?.username, password: form?.password };
  const tenant = form?.tenant.toLowerCase();

  if (!success) {
    return NextResponse.json(
      { error: error.issues },
      { status: 400 },
    );
  }

  const { data } = await authApi.post<SignInResponse>("/users/login", signIn, {
    headers: {
      Tenant: `${tenant}`
    }
  });

  const { data: userData } = await authApi.get<DecodeTokenResponse>("/users/decode-token", {
    headers: {
      Tenant: `${tenant}`,
      Authorization: `Bearer ${data.accessToken}`,
    }
  });

  if (!userData) {
    return NextResponse.json(
      { error: "Error to decode token." },
      { status: 500 }
    );
  }

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

  response.cookies.set(
    storageKeys.userFirstName,
    userData.firstName,
    {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    }
  );

  response.cookies.set(
    storageKeys.userLastName,
    userData.lastName,
    {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    }
  );

  response.cookies.set(
    storageKeys.userEmail,
    userData.email,
    {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    }
  );

  return response;
}