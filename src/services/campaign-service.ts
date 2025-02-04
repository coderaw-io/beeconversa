import { CampaignResponse, CreateCampaignFromCsvRequest, CreateCampaignFromCustomerRequest } from "@/@types/campaign/campaign";
import { customerApi } from "@/lib/axios";
import { AuthService } from "./auth-service";

export class CampaignService {
  static async getAllCampaigns() {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken);

      const { data } = await customerApi.get<CampaignResponse>("/campaigns", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data.results;
    } catch (error) {
      console.log("Get all campaigns error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async createCampaignFromCsvs(formData: CreateCampaignFromCsvRequest) {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken);

      const { data } = await customerApi.post("/campaigns/create-from-csvs", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data;
    } catch (error) {
      console.log("Create campaign from csvs error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async createCampaignFromCustomer(formData: CreateCampaignFromCustomerRequest) {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken);

      const { data } = await customerApi.post("/campaigns/create-from-customers", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data;
    } catch (error) {
      console.log("Create campaign from customers error:", error);
      throw new Error("Internal server error!");
    }
  }
}