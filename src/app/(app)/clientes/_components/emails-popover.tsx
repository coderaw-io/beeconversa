import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

import { Customer } from "@/@types/customers/customer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MailsIcon } from "lucide-react"

interface CustomersEmailsPopoverProps {
  customer: Customer
}

export function CustomersEmailsPopover({
  customer
}: CustomersEmailsPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline">
          Email's
        </Button>
      </PopoverTrigger>

      <PopoverContent align="center" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              E-mail's cadastrados
            </h4>

            <p className="text-sm text-muted-foreground">
              Este cliente possui mais de um e-mail cadastrado.
            </p>
          </div>

          <div className="grid gap-2">
            {customer.emails.map((data) => (
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="emails">
                  <MailsIcon />
                </Label>

                <Input
                  id="emails"
                  className="col-span-2 h-8"
                  value={customer.emails}
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