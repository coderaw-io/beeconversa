import { PageHeader } from "@/components/shared/page-header";
import { CustomersFiltersSection } from "./_components/filters-section";
import { CustomersPagination } from "./_components/pagination";
import { CustomersTable } from "./_components/table";
import { CustomersTabs } from "./_components/tabs";

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Contatos cadastrados"
        description="Gerencie todos os contatos dos seus clientes cadastrados."
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
