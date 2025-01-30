import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

interface DeleteCustomerProps {
  customerId: string;
  customerName: string;
}

export function DeleteCustomer({ customerId, customerName }: DeleteCustomerProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          type="button"
          size="icon"
          variant="ghost"
        >
          <Trash2Icon className="size-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja deletar o cliente <strong className="italic">{customerName}</strong> ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o cliente {""}
            <strong>{customerName}</strong> e removerá todos os dados relacionados a ele de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive hover:bg-red-600 dark:bg-destructive dark:text-foreground dark:hover:bg-red-500">
            Deletar cliente
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}