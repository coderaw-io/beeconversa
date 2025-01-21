export interface UploadFileResponse {
  pageNumber: number,
  pageSize: number,
  totalPages: number,
  totalResults: number,
  totalAmount: number,
  results: UploadedFileResult[]
}

export interface UploadedFileResult {
  id: string
  user: User
  fileType: string
  fileStatus: string
  filePath: string
  totalRows: number
  totalRowsImported: number
  totalRowsNotImported: number
  creationDate: string
}

export interface User {
  id: string
  name: string
  email: string
}
