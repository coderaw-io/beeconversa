import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/shared/app-sidebar";
import { Header } from "@/components/shared/header";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="grid auto-rows-min gap-6 md:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-accent" />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
