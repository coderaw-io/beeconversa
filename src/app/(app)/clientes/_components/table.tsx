"use client"

import type { Customer } from "@/@types/customers/customer"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { FingerprintIcon, InfoIcon, MailIcon, PhoneCallIcon } from "lucide-react"

const customers: Customer[] = [
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Chieko Chute",
    emails: ["chieko@example.com"],
    phones: ["+55 (11) 98865-9198"],
    cpf: "123.456.789-00",
    status: "active",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Jacob Jones",
    emails: ["jacob@example.com"],
    phones: ["+55 (12) 90077-1111"],
    cpf: "123.456.789-01",
    status: "inactive",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Darlene Robertson",
    emails: ["darlene@example.com"],
    phones: ["+55 (11) 97765-3333"],
    cpf: "123.456.789-02",
    status: "active",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Brooklyn Simmons",
    emails: ["brooklyn@example.com"],
    phones: ["+55 (11) 95443-1225"],
    cpf: "123.456.789-03",
    status: "blocked",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Jerome Bell",
    emails: ["jerome@example.com"],
    phones: ["+55 (19) 92233-1875"],
    cpf: "123.456.789-04",
    status: "inactive",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Wade Warren",
    emails: ["wade@example.com"],
    phones: ["+55 (21) 98676-4433"],
    cpf: "123.456.789-05",
    status: "active",
  },
  {
    id: "3028f785-70df-4a7e-b9c3-c965a2ca5004",
    name: "Esther Howard",
    emails: ["esther@example.com"],
    phones: ["+55 (11) 91968-0395"],
    cpf: "123.456.789-06",
    status: "active",
  },
]

export function CustomersTable() {
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
          {customers.map((customer) => (
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
              <td className="py-4">{customer.emails[0]}</td>
              <td className="py-4">{customer.phones[0]}</td>
              <td className="py-4">{customer.cpf}</td>
              <td className="py-4">
                <Badge
                  variant="secondary"
                  className={cn("rounded-full tracking-wider px-3.5", {
                    "bg-success text-emerald-950 hover:bg-emerald-300 dark:bg-success dark:hover:bg-emerald-300": customer.status === "active",
                    "bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500": customer.status === "inactive",
                    "bg-red-100 text-destructive hover:bg-red-200 dark:bg-red-100 dark:hover:bg-red-200": customer.status === "blocked"
                  })}
                >
                  <span
                    className={cn("size-2 rounded-full mr-1", {
                      "bg-emerald-950": customer.status === "active",
                      "bg-black": customer.status === "inactive",
                      "bg-destructive": customer.status === "blocked"
                    })}
                  />

                  {customer.status === "active" ? "Ativo" :
                    customer.status === "inactive" ? "Inativo" : "Bloqueado"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

