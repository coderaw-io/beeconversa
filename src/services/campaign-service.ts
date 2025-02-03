import { CampaignResponse } from "@/@types/campaign/campaign";
import { customerApi } from "@/lib/axios";
import { AuthService } from "./auth-service";

export class CampaignService {
  static async getAllCampaigns() {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken)

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
}