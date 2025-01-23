import { CustomerContext } from "@/context/customer-context"
import { useContext } from "react"

export const useCustomerContext = () => {
  const context = useContext(CustomerContext)

  if (!context) {
    throw new Error("useCustomer must be used within an CustomerProvider")
  }
  
  return context
}
