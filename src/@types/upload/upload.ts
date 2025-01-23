export interface UploadFileResponse {
  fileId: string;
}

export interface GetAllUploadedFileResponse {
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
  fileStatus: "InProgress" | "Concluded"
  filePath: string
  totalRows: number
  totalRowsImported: number
  totalRowsNotImported: number
  creationDate: string
}

export interface User {
  id: string
  username: string
  email: string
}
