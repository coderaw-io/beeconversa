import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import { CampaignCustomer } from "@/@types/campaign/campaign";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleUserIcon, MegaphoneIcon, UserCircleIcon } from "lucide-react";

interface CampaignCustomersProps {
  campaign: string;
  customers: CampaignCustomer[];
}

export function CampaignCustomers({ customers, campaign }: CampaignCustomersProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="flex items-center gap-2 h-9 disabled:cursor-not-allowed"
          disabled={customers.length === 0}
        >
          <CircleUserIcon className="size-4" />
          Clientes cadastrados
        </Button>
      </SheetTrigger>

      <SheetContent className="p-0 m-3 h-auto rounded-[0.75rem]">
        <SheetHeader className="p-6">
          <SheetTitle className="flex items-center gap-2">
            <MegaphoneIcon className="size-4" />
            Clientes vinculados a campanha {campaign}
          </SheetTitle>
          <SheetDescription>
            Visualize a listagem de clientes cadastrados nesta campanha.
          </SheetDescription>
        </SheetHeader>
        <Separator className="h-0.5" />
        {customers.length ?
          customers.map((customer) => (
            <div
              key={customer.id}
              className="flex flex-col space-y-6 py-8 px-6 border-b-2 lg:space-y-8 xl:space-y-10"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <div className="size-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <UserCircleIcon className="size-6 text-zinc-800" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <h3 className="text-sm font-semibold">
                      {customer.name}
                    </h3>

                    <div className="flex items-center gap-2 text-sm">
                      {customer.cpf}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-1.5">
                  <span className="max-w-44 text-sm text-muted-foreground truncate">
                    {customer.emails}
                  </span>

                  <span className="text-sm text-muted-foreground">
                    {customer.phones}
                  </span>
                </div>
              </div>
            </div>
          )) : (
            <div className="p-6">
              Nenhum cliente cadastrado para esta campanha.
            </div>
          )}
      </SheetContent>
    </Sheet>
  )
}