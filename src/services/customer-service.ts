import { CreateCustomerRequest, GetAllCustomerResponse } from "@/@types/customers/customer";
import { customerApi } from "@/lib/axios";
import { AuthService } from "./auth-service";

export class CustomerService {
  static async getAllCustomers() {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken)

      const { data } = await customerApi.get<GetAllCustomerResponse>("/customers", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data.results;
    } catch (error) {
      console.log("Get all customers error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async getAllCustomersPaginated(page: number, pageSize: number) {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken)

      const { data } = await customerApi.get<GetAllCustomerResponse>(
        `/customers?PageFilter.Page=${page}&PageFilter.PageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

      return data;
    } catch (error) {
      console.log("Get all customers paginated error:", error);
      throw new Error("Internal server error!");
    }
  }

  static async createCustomer(request: CreateCustomerRequest) {
    try {
      const accessToken = await AuthService.getAccessToken();
      Promise.resolve(accessToken)

      const { data } = await customerApi.post("/customers",
        request, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      return data;
    } catch (error) {
      console.log("Create customer error:", error);
      throw new Error("Internal server error!");
    }
  }
}