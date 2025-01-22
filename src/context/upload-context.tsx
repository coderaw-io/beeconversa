"use client"

import type React from "react"

import type { GetAllUploadedFileResponse, UploadedFileResult } from "@/@types/upload/upload"
import { UploadService } from "@/services/upload-service"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { createContext, useCallback, useState } from "react"

interface FileUpload {
  file: File
  progress: number
  status: "uploading" | "completed" | "error"
  response?: GetAllUploadedFileResponse
  errorMessage?: string
}

interface UploadContextType {
  uploads: FileUpload[]
  addUpload: (file: File) => void
  removeUpload: (file: File) => void
  uploadedFiles: UploadedFileResult[] | undefined
  isLoading: boolean
  refetchUploadedFiles: () => void
  successfulUploads: number
  failedUploads: number
  duplicateFiles: number
}

export const UploadContext = createContext<UploadContextType | undefined>(undefined)

export const UploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uploads, setUploads] = useState<FileUpload[]>([])
  const [successfulUploads, setSuccessfulUploads] = useState(0)
  const [failedUploads, setFailedUploads] = useState(0)
  const [duplicateFiles, setDuplicateFiles] = useState(0)

  const queryClient = useQueryClient()

  const {
    data: uploadedFiles,
    isLoading,
    refetch: refetchUploadedFiles,
  } = useQuery<UploadedFileResult[]>({
    queryKey: ["get-all-uploaded-files"],
    queryFn: UploadService.getAllUploadedFiles,
  })

  const addUpload = useCallback(
    (file: File) => {
      const newUpload: FileUpload = {
        file,
        progress: 0,
        status: "uploading",
      }

      setUploads((prevUploads) => [...prevUploads, newUpload])

      UploadService.uploadFile(file, (progress) => {
        setUploads((prevUploads) => prevUploads.map((u) => (u.file === file ? { ...u, progress } : u)))
      })
        .then((response) => {
          setUploads((prevUploads) =>
            prevUploads.map((u) => (u.file === file ? { ...u, status: "completed", response } : u)),
          )

          setSuccessfulUploads((prev) => prev + 1)

          const isDuplicate = uploadedFiles?.some((uploadedFile) => uploadedFile.filePath.includes(file.name))
          if (isDuplicate) setDuplicateFiles((prev) => prev + 1)

          queryClient.invalidateQueries({ 
            queryKey: ["get-all-uploaded-files"],
            exact: true,
            refetchType: "all"
          })
        })
        .catch((error) => {
          setUploads((prevUploads) =>
            prevUploads.map((u) => (u.file === file ? { 
              ...u, 
              status: "error", 
              errorMessage: error.message 
            } : u)),
          )
          setFailedUploads((prev) => prev + 1)
        })
    },
    [queryClient, uploadedFiles],
  )

  const removeUpload = useCallback((file: File) => {
    setUploads((prevUploads) => prevUploads.filter((u) => u.file !== file))
  }, [])

  return (
    <UploadContext.Provider
      value={{
        uploads,
        addUpload,
        removeUpload,
        uploadedFiles,
        isLoading,
        refetchUploadedFiles,
        successfulUploads,
        failedUploads,
        duplicateFiles,
      }}
    >
      {children}
    </UploadContext.Provider>
  )
}

