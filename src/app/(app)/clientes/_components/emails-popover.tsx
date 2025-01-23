import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

import { Customer } from "@/@types/customers/customer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MailIcon, MailsIcon } from "lucide-react"

interface CustomersEmailsPopoverProps {
  customer: Customer
}

export function CustomersEmailsPopover({
  customer
}: CustomersEmailsPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          type="button" 
          size="sm" 
          variant="outline"
          className="flex items-center gap-2 xl:h-9"
        >
          <MailsIcon className="size-4" />
          Emails ({customer.emails.length})
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-72">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">
              E-mails cadastrados
            </h4>

            <p className="text-sm text-muted-foreground">
              Este cliente possui mais de um e-mail cadastrado no sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-4">
            {customer.emails.map((data, index) => (
              <div key={index} className="relative w-full">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  id="emails"
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