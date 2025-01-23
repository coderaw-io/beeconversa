import { SignInResponse } from "@/@types/auth/sign-in";
import { storageKeys } from "@/config/storage-keys";
import { authApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get(storageKeys.refreshToken)?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { error: "Refresh token não encontrado." },
      { status: 401 }
    );
  }

  try {
    const { data } = await authApi.post<SignInResponse>("/users/refresh-token", {
      refreshToken,
    });

    const response = NextResponse.json(null, { status: 200 });

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
  } catch (error) {
    console.error("Erro ao atualizar o token:", error);
    return NextResponse.json(
      { error: "Não foi possível atualizar o token." },
      { status: 500 }
    );
  }
}
