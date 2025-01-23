"use client"

import { Customers } from "@/@types/customers/customer"
import { CustomerService } from "@/services/customer-service"
import { useQuery } from "@tanstack/react-query"
import { createContext, useEffect, useMemo, useState } from "react"

interface CustomerContextType {
  customers: Customers | undefined
  isLoading: boolean
  currentPage: number
  totalPages: number
  totalResults: number
  pageSize: number
  setCurrentPage: (page: number) => void
  setPageSize: (size: number) => void
  refetchCustomersData: () => void
}

export const CustomerContext = createContext<CustomerContextType | undefined>(undefined)

export const CustomerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(60)
  const [totalPages, setTotalPages] = useState(1)
  const [totalResults, setTotalResults] = useState(1)

  const {
    data,
    isLoading,
    refetch: refetchCustomersData,
  } = useQuery({
    queryKey: ["get-all-customers", currentPage, pageSize],
    queryFn: () => CustomerService.getAllCustomersPaginated(currentPage, pageSize),
  })

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages ?? 1);
      setTotalResults(data.totalResults ?? 0);
    }
  }, [data]);  

  const customers = useMemo(() => data?.results || [], [data])

  return (
    <CustomerContext.Provider
      value={{
        customers,
        isLoading,
        currentPage,
        totalPages,
        totalResults,
        pageSize,
        setCurrentPage,
        setPageSize,
        refetchCustomersData,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}