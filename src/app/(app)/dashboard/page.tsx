import { PageHeader } from "@/components/shared/page-header";
import { DashboardCards } from "./_components/cards";
import { DashboardChartsContent } from "./_components/charts-content";
import { DashboardFilters } from "./_components/filters";

export default function DashboardPage() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <PageHeader
          title="Dashboard"
          description="Gerencie todos os dados da sua operação de forma eficiente."
        />
        
        <DashboardFilters />
      </div>

      <div className="py-8">
        <DashboardCards />
        <DashboardChartsContent />
      </div>
    </>
  )
}
