import { GetAllCustomerResponse } from "@/@types/customers/customer";
import { storageKeys } from "@/config/storage-keys";
import { customerApi } from "@/lib/axios";

export class CustomerService {
  static async getAllCustomers() {
    try {
      const { data } = await customerApi.get<GetAllCustomerResponse>("/customers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(storageKeys.accessToken)}`
        }
      });

      return data.results;
    } catch (error) {
      console.log("Get all customers error:", error);
      throw new Error("Internal server error!");
    }
  }
}