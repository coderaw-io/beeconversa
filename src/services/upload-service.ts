import type { GetAllUploadedFileResponse } from "@/@types/upload/upload"
import { storageKeys } from "@/config/storage-keys"
import { tenant, uploadApi } from "@/lib/axios"

export class UploadService {
  static async uploadFile(
    file: File, 
    onProgress?: (progress: number) => void
  ): Promise<GetAllUploadedFileResponse> {
    return new Promise((resolve, reject) => {
      const formData = new FormData()
      formData.append("file", file)
      const xhr = new XMLHttpRequest()

      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round((event.loaded * 100) / event.total)
          if (onProgress) onProgress(percentCompleted)
        }
      })

      xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(new Error(`HTTP Error: ${xhr.status}`))
        }
      })

      xhr.addEventListener("error", () => {
        reject(new Error("Network Error"))
      })

      xhr.open("POST", `${uploadApi.defaults.baseURL}/import`, true)
      xhr.setRequestHeader("Tenant", tenant)
      xhr.setRequestHeader("Authorization", `Bearer ${localStorage.getItem(storageKeys.accessToken)}`)
      xhr.send(formData)
    })
  }

  static async getAllUploadedFiles() {
    try {
      const { data } = await uploadApi.get<GetAllUploadedFileResponse>("/import", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(storageKeys.accessToken)}`
        }
      });
      
      return data.results;
    } catch (error) {
      console.log("Get all uploaded files error:", error);
      throw new Error("Internal server error!");
    }
  }
}

