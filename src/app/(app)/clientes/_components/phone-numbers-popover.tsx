import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

import { Customer } from "@/@types/customers/customer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PhoneCallIcon, PhoneIcon } from "lucide-react"

interface CustomersPhoneNumbersPopoverProps {
  customer: Customer
}

export function CustomersPhoneNumbersPopover({
  customer
}: CustomersPhoneNumbersPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="flex items-center gap-2 xl:h-9"
        >
          <PhoneCallIcon className="size-4" />
          Telefones ({customer.phonenumbers.length})
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-72">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              Telefones cadastrados
            </h4>

            <p className="text-sm text-muted-foreground">
              Este cliente possui mais de um telefone cadastrado no sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            {customer.phonenumbers.map((data, index) => (
              <div key={index} className="relative w-full">
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  id="phonenumbers"
                  className="w-full pl-10"
                  value={data}
                />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}