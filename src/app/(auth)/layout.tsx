import React from "react";

import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(storageKeys.accessToken);

  if (token) {
    redirect("/");
  }

  return <>{children}</>
}