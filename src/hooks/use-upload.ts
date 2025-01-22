import { UploadContext } from "@/context/upload-context"
import { useContext } from "react"

export const useUploadContext = () => {
  const context = useContext(UploadContext)

  if (!context) {
    throw new Error("useUpload must be used within an UploadProvider")
  }
  
  return context
}
