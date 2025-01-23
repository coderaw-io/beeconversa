"use client"

import CustomersLoading from "../loading";

import { Customers } from "@/@types/customers/customer";
import { ReportIsonIcon } from "@/components/shared/icons/report-ison-icon";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { CustomerService } from "@/services/customer-service";
import { useQuery } from "@tanstack/react-query";
import { CustomersEmailsPopover } from "./emails-popover";
import { CustomersPhoneNumbersPopover } from "./phone-numbers-popover";

export function CustomersTable() {
  const { data: customersData, isPending } = useQuery<Customers>({
    queryKey: ["get-all-customers"],
    queryFn: async () => await CustomerService.getAllCustomers()
  });

  if (isPending) return <CustomersLoading />

  return (
    <div className="my-8 border rounded-[0.75rem]">
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr className="text-left">
            <th className="p-4 font-medium">
              <Checkbox />
            </th>

            <th className="p-4 font-medium">
              Nome completo
            </th>

            <th className="p-4 font-medium">
              E-mail
            </th>

            <th className="p-4 font-medium">
              Telefone
            </th>

            <th className="p-4 font-medium">
              CPF
            </th>

            <th className="p-4 font-medium">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {customersData?.length ?
            customersData?.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-4">
                  <Checkbox />
                </td>

                <td className="py-4">
                  <div>
                    <div className="text-sm font-medium truncate xl:text-base">
                      {customer.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate xl:text-sm">
                      {customer.id}
                    </div>
                  </div>
                </td>

                <td className="text-sm py-4 xl:text-base">
                  {customer.emails.length > 1 ? (
                    <CustomersEmailsPopover customer={customer} />
                  ) : customer.emails}
                </td>

                <td className="text-sm py-4 xl:text-base">
                  {customer.phonenumbers.length > 1 ? (
                    <CustomersPhoneNumbersPopover customer={customer} />
                  ) : customer.phonenumbers}
                </td>

                <td className="text-sm py-4 xl:text-base">
                  {customer.cpf}
                </td>

                <td className="py-4">
                  <Badge
                    variant="secondary"
                    className={cn("text-[11px] rounded-full tracking-wider xl:text-xs", {
                      "bg-success text-emerald-950 hover:bg-emerald-300 dark:bg-success dark:hover:bg-emerald-300": customer.status === "active",
                      "bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500": customer.status === "inactive",
                      "bg-red-100 text-destructive hover:bg-red-200 dark:bg-red-100 dark:hover:bg-red-200": customer.status === "blocked",
                      "bg-black text-yellow-400 dark:bg-border": "Não informado"
                    })}
                  >
                    <span
                      className={cn("size-2 rounded-full mr-1", {
                        "bg-emerald-950": customer.status === "active",
                        "bg-black": customer.status === "inactive",
                        "bg-destructive": customer.status === "blocked",
                        "bg-yellow-400": "Não informado"
                      })}
                    />

                    {customer.status === "active" ? "Ativo" :
                      customer.status === "inactive" ? "Inativo" :
                        customer.status === "blocked" ? "Bloqueado" : "Não informado"}
                  </Badge>
                </td>
              </tr>
            )) : (
              <tr className="h-28 w-full">
                <td colSpan={6} className="text-center text-sm pt-6 pb-12 dark:text-zinc-600">
                  <div className="w-full flex justify-center items-center">
                    <ReportIsonIcon className="size-36" />
                  </div>

                  Nenhum resultado encontrado.
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

