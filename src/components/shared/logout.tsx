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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";

export function Logout() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="destructive"
                className="bg-background text-destructive border border-border hover:text-background"
              >
                <LogOutIcon className="size-5" />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Deseja encerrar a sessão atual?</AlertDialogTitle>
                <AlertDialogDescription>
                  Após esta ação, você será deslogado do sistema e redirecionado para se autenticar novamente.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancelar
                </AlertDialogCancel>
                
                <AlertDialogAction className="bg-destructive">
                  Encerrar sessão
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TooltipTrigger>

        <TooltipContent side="right">
          <p>Encerrar sessão</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}