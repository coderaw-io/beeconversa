"use client"

import { useCustomerContext } from "@/hooks/use-customer";
import { CustomersFiltersSection } from "./filters-section";
import { CustomersPagination } from "./pagination";
import { CustomersTable } from "./table";
import { CustomersTabs } from "./tabs";

export function CustomersContent() {
  const {
    customers,
    isLoading,
    currentPage,
    totalPages,
    totalResults,
    pageSize,
    setCurrentPage,
    setPageSize,
  } = useCustomerContext()

  return (
    <div className="py-8 pl-1">
      <div className="mb-6">
        <CustomersFiltersSection />
      </div>

      <CustomersTabs />
      <CustomersTable 
        data={customers || []}
        isPending={isLoading}
      />

      <CustomersPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  )
}