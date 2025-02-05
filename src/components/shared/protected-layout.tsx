"use client"

import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

interface ProtectedLayoutProps {
  children: Readonly<React.ReactNode>
}

export default function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}