import { AppSidebar } from "@/components/shared/app-sidebar"
import { Header } from "@/components/shared/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-6 py-4 px-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
