"use client"

import { Header } from "@/components/shared/header/header"
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { queryClient } from "@/lib/react-query"
import { QueryClientProvider } from "@tanstack/react-query"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1 flex-col gap-6 pt-4 pb-12 px-8">
            <main className="max-w-9xl w-full overflow-hidden">
              {children}
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </QueryClientProvider>
  )
}
