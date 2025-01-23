import ProtectedLayout from "@/components/shared/protected-layout"

import { Header } from "@/components/shared/header/header"
import { AppSidebar } from "@/components/shared/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { storageKeys } from "@/config/storage-keys"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get(storageKeys.accessToken);

  if (!token) {
    redirect("/login");
  }

  return (
    <ProtectedLayout>
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
    </ProtectedLayout>
  )
}
