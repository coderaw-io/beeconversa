import type { GetAllUploadedFileResponse } from "@/@types/upload/upload";
import { tenant, uploadApi } from "@/lib/axios";
import { AuthService } from "./auth-service";

export class UploadService {
  static async getAllUploadedFiles() {
    try {
      const accessToken = await AuthService.getAccessToken();
      if (!accessToken) return;

      const { data } = await uploadApi.get<GetAllUploadedFileResponse>("/import", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data.results;
    } catch (error) {
      console.log("Get all uploaded files error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async getAllUploadedFilesPaginated(page: number, pageSize: number) {
    try {
      const accessToken = await AuthService.getAccessToken();
      if (!accessToken) return;

      const { data } = await uploadApi.get<GetAllUploadedFileResponse>(
        `/import?PageFilter.Page=${page}&PageFilter.PageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

      return data;
    } catch (error) {
      console.log("Get all uploaded files error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async getUploadedFileById(fileId: string) {
    try {
      const accessToken = await AuthService.getAccessToken();
      if (!accessToken) return;

      const { data } = await uploadApi.get<GetAllUploadedFileResponse>(
        `/import?FileIds=${fileId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      return data.results;
    } catch (error) {
      console.log("Get uploaded file by id error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async uploadFile(
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<GetAllUploadedFileResponse> {
    const accessToken = await AuthService.getAccessToken();
    Promise.resolve(accessToken);

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
      xhr.setRequestHeader("Authorization", `Bearer ${accessToken}`)
      xhr.send(formData)
    })
  }
}

