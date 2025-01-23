import { PageHeader } from "@/components/shared/page-header";
import { CustomerProvider } from "@/context/customer-context";
import { CustomersContent } from "./_components/customers-content";

export default function CustomersPage() {
  return (
    <CustomerProvider>
      <PageHeader
        title="Clientes cadastrados"
        description="Gerencie todos os clientes cadastrados no sistema."
      />

      <CustomersContent />
    </CustomerProvider>
  )
}
