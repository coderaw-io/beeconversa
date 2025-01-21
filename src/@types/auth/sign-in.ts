export interface SignInRequest {
  username: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  refreshToken: string;
  tokenType: string;
  scope: string;
}
