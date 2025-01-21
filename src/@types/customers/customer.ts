export type Customers = Customer[];

export type Customer = {
  id: string
  name: string
  emails: string[]
  phones: string[]
  cpf: string
  status?: "active" | "inactive" | "blocked"
} 

export interface CreateCustomerRequest {
  name: string
  emails: string[]
  phones: string[]
  cpf: string
}

export interface GetAllCustomerResponse {
  pageNumber: number
  pageSize: number
  totalPages: number
  totalResults: number
  results: any[]
}
