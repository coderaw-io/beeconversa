import { PageHeader } from "@/components/shared/page-header";
import { CustomersFiltersSection } from "./_components/filters-section";
import { CustomersPagination } from "./_components/pagination";
import { CustomersTable } from "./_components/table";
import { CustomersTabs } from "./_components/tabs";

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Clientes cadastrados"
        description="Gerencie todos os clientes cadastrados no sistema."
      />

      <div className="py-8 pl-1">
        <CustomersTabs />

        <div className="mt-6">
          <CustomersFiltersSection />
        </div>
        
        <CustomersTable />
        <CustomersPagination />
      </div>
    </>
  )
}
