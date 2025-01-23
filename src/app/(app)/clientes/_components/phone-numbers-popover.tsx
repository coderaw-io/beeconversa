import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

import { Customer } from "@/@types/customers/customer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneCallIcon } from "lucide-react"

interface CustomersPhoneNumbersPopoverProps {
  customer: Customer
}

export function CustomersPhoneNumbersPopover({
  customer
}: CustomersPhoneNumbersPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          Telefones
        </Button>
      </PopoverTrigger>

      <PopoverContent align="center" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              Telefones cadastrados
            </h4>

            <p className="text-sm text-muted-foreground">
              Este cliente possui mais de um telefone cadastrado.
            </p>
          </div>

          <div className="grid gap-2">
            {customer.phonenumbers.map((data) => (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="phonenumbers">
                  <PhoneCallIcon />
                </Label>

                <Input
                  id="phonenumbers"
                  className="col-span-2 h-8"
                  value={customer.phonenumbers}
                  disabled
                />
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}