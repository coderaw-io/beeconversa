"use client"

import axios from "axios";

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
} from "../../ui/tooltip";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function Logout() {
  const router = useRouter();

  async function handleLogout() {
    await axios.post("/api/auth/sign-out");
    router.push("/login");
  }

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
                className="bg-background text-foreground border border-border hover:text-foreground hover:border-none"
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
                
                <AlertDialogAction className="bg-destructive" onClick={handleLogout}>
                  Encerrar sessão
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TooltipTrigger>

        <TooltipContent side="right" className="bg-destructive dark:bg-destructive dark:text-foreground">
          <p>Encerrar sessão</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}