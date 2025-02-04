import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { CampaignCustomer } from "@/@types/campaign/campaign";
import { Button } from "@/components/ui/button";
import { CircleUserIcon, MegaphoneIcon } from "lucide-react";

interface CampaignCustomersProps {
  campaign: string;
  customers: CampaignCustomer[];
}

export function CampaignCustomers({ customers, campaign }: CampaignCustomersProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="flex items-center gap-2 h-9 disabled:cursor-not-allowed"
          disabled={customers.length === 0}
        >
          <CircleUserIcon className="size-4" />
          {customers.length === 0 ?
            "Nenhum cliente vinculado nesta campanha" : "Clientes vinculados desta campanha"}
        </Button>
      </DrawerTrigger>

      <DrawerContent className="p-0 mx-4 h-[560px] rounded-t-[0.75rem]">
        <div className="max-w-8xl mx-auto w-full">
          <DrawerHeader className="p-6">
            <DrawerTitle className="flex items-center gap-2">
              <MegaphoneIcon className="size-4" />
              Clientes vinculados a campanha {campaign}
            </DrawerTitle>
            <DrawerDescription>
              Este são todos os clientes que você vinculou á esta campanha.
            </DrawerDescription>
          </DrawerHeader>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Nome</TableHead>
                  <TableHead className="text-center">CPF</TableHead>
                  <TableHead className="text-center">E-mail</TableHead>
                  <TableHead className="text-center">Telefone</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.length ?
                  customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="text-center font-medium">
                        {customer.name}
                      </TableCell>
                      <TableCell className="text-center">
                        {customer.cpf}
                      </TableCell>
                      <TableCell className="text-center">
                        {customer.emails}
                      </TableCell>
                      <TableCell className="text-center">
                        {customer.phones}
                      </TableCell>
                    </TableRow>
                  )) : (
                    <div className="p-6">
                      Nenhum cliente cadastrado para esta campanha.
                    </div>
                  )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              Total de {customers.length} clientes vinculados a esta campanha.
            </div>
            <div className="space-x-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={customers.length <= 10}
              >
                Anterior
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={customers.length <= 10}
              >
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}