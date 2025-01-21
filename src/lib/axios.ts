import axios from "axios";

import { env } from "@/config/env";

export const tenant = env.NEXT_PUBLIC_TENANT;

export const authApi = axios.create({
  baseURL: env.NEXT_PUBLIC_AUTH_API,
  headers: {
    Tenant: `${tenant}`
  }
});

export const uploadApi = axios.create({
  baseURL: env.NEXT_PUBLIC_UPLOAD_API,
  headers: {
    "Content-Type": "application/json;",
    Tenant: `${tenant}`,
  },
});