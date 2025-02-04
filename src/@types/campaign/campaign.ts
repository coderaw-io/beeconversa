export interface CreateCampaignFromCsvRequest {
  name: string
  fileIds: string[]
}

export interface CreateCampaignFromCustomerRequest {
  name: string
  customerIds: string[]
}

export interface CampaignResponse {
  pageNumber: number
  pageSize: number
  totalPages: number
  totalResults: number
  results: CampaignResult[]
}

export interface CampaignResult {
  id: string
  name: string
  customers: CampaignCustomer[]
  creationDate: string
}

export interface CampaignCustomer {
  id: string
  name: string
  emails: string[]
  phones: string[]
  cpf: string
  fileImportedDetails: FileImportedDetails
  creationDate: string
  isActive: boolean
  user: User
  tenant: Tenant
}

export interface FileImportedDetails {
  fileId: string
}

export interface User {
  id: string
  username: string
}

export interface Tenant {
  name: string
}
