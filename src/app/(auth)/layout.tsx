import React from "react";

import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const loggedUser = await isAuthenticated();

  if (loggedUser) {
    redirect("/");
  }

  return <>{children}</>
}