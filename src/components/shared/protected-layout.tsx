"use client"

import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import { useAuthContext } from "@/hooks/use-auth";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedLayoutProps {
  children: Readonly<React.ReactNode>
  loggedUserData: DecodeTokenResponse
}

export default function ProtectedLayout({
  children,
  loggedUserData
}: ProtectedLayoutProps) {
  const { setUser } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    setUser(loggedUserData)
  }, [loggedUserData, setUser]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}