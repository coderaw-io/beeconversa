import React from "react";

import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedUser = getAccessToken();

  if (await loggedUser) {
    redirect("/");
  }

  return <>{children}</>
}