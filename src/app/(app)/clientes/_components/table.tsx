"use client"

import { Customers } from "@/@types/customers/customer"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CustomerService } from "@/services/customer-service"
import { useQuery } from "@tanstack/react-query"
import { FingerprintIcon, InfoIcon, MailIcon, PhoneCallIcon } from "lucide-react"

export function CustomersTable() {
  const { data: customersData } = useQuery<Customers>({
    queryKey: ["get-all-customers"],
    queryFn: async () => await CustomerService.getAllCustomers()
  })

  return (
    <div className="my-8 border rounded-[0.75rem]">
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr className="text-left">
            <th className="p-4 font-medium">
              <input type="checkbox" className="rounded border-border" />
            </th>

            <th className="p-4 font-medium">Nome completo</th>

            <th className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <MailIcon className="size-4" />
                E-mail
              </div>
            </th>

            <th className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <PhoneCallIcon className="size-4" />
                Telefone
              </div>
            </th>

            <th className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <FingerprintIcon className="size-4" />
                CPF
              </div>
            </th>

            <th className="p-4 font-medium">
              <div className="flex items-center gap-2">
                <InfoIcon className="size-4" />
                Status
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {customersData?.length ?
            customersData?.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="p-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>

                <td className="py-4">
                  <div>
                    <div className="font-medium">{customer.name}</div>
                    <div className="text-sm text-gray-500">{customer.id}</div>
                  </div>
                </td>
                <td className="py-4">{customer.emails}</td>
                <td className="py-4">{customer.phonenumbers}</td>
                <td className="py-4">{customer.cpf}</td>
                <td className="py-4">
                  <Badge
                    variant="secondary"
                    className={cn("rounded-full tracking-wider", {
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
              <tr className="h-28 w-full flex justify-center items-center">
                Nenhum resultado encontrado.
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

