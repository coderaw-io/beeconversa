import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { BellRingIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Notification {
  id: string
  title: string
  description: string
  timestamp: string
  isRead: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Importação concluida com sucesso",
    description: "Sua nova base de dados já foi importada com êxito.",
    timestamp: "5 horas atrás",
    isRead: false,
  },
  {
    id: "2",
    title: "Base de dados do mês passado deletada",
    description: "O processo de exclusão de dados após 30 dias foi concluido.",
    timestamp: "Ontem",
    isRead: false,
  },
  {
    id: "3",
    title: "Nova venda realizada",
    description: "Operador Gustavo Molina realizou uma nova venda.",
    timestamp: "2 dias atrás",
    isRead: false,
  },
  {
    id: "4",
    title: "Portabilidade cancelada",
    description: "Cliente do operador Douglas Rosa cancelou a portabilidade.",
    timestamp: "4 dias atrás",
    isRead: false,
  },
  {
    id: "5",
    title: "Nova venda realizada",
    description: "Operadora Paula Rebouças realizou uma nova venda.",
    timestamp: "Semana passada",
    isRead: false,
  },
]

export function Notifications() {
  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipTrigger>
            <PopoverTrigger asChild className="hidden sm:flex">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="relative"
              >
                <BellRingIcon className="size-6" />
                {notifications.some(n => !n.isRead) && (
                  <span className="absolute top-[-4px] right-[-2px] size-2.5 rounded-full bg-primary dark:bg-yellow-400 animate-pulse" />
                )}
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>

          <TooltipContent side="bottom">
            <p>Notificações</p>
          </TooltipContent>
        </Tooltip>

        <PopoverContent className="h-[420px] w-96 p-0" align="end">
          <Card className="border-0 shadow-none p-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-medium">
                Notificações
              </CardTitle>

              <Button
                type="button"
                variant="link"
                className="text-xs text-link font-medium p-0 h-auto"
              >
                Marcar tudo como lido
              </Button>
            </CardHeader>
            <Separator />
            <ScrollArea className="h-96">
              <CardContent className="grid gap-4 p-0 mt-2">
                {notifications.map((notification, index) => (
                  <div key={notification.id} className="grid gap-4">
                    <div className="grid grid-cols-[25px_1fr] items-start p-3 last:mb-0 last:pb-0">
                      {!notification.isRead && (
                        <span className="flex size-2 translate-y-1.5 rounded-full bg-primary dark:bg-yellow-400" />
                      )}
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                        <p className="text-xs text-muted-foreground italic">
                          {notification.timestamp}
                        </p>
                      </div>
                    </div>
                    {index < notifications.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}