"use client"

import {
  CheckCheckIcon,
  MicIcon,
  MoreVerticalIcon,
  PaperclipIcon,
  PhoneIcon,
  SearchIcon,
  SmileIcon,
  VideoIcon
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react"

export default function WhatsappPage() {
  const [message, setMessage] = useState("");

  const currentDate = format(
    new Date(),
    "EEEE, dd 'de' MMMM 'de' yyyy",
    { locale: ptBR, }
  );

  const capitalizedDate = currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <div className="flex min-h-screen overflow-hidden bg-background">
      <div className="max-w-md w-full flex flex-col border-r">
        <div className="w-full border-b">
          <h3 className="text-2xl font-semibold pl-4 mb-3">
            Conversas
          </h3>

          <div className="relative w-full px-4 mb-6">
            <SearchIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Pesquisar conversas" />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-6 px-4 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage alt="Clientes" />
                  <AvatarFallback>C{i}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">
                      Cliente {i + 1}
                    </h4>

                    <span className="text-xs text-muted-foreground">
                      09:14 AM
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground truncate">
                    Olá, gostaria de agendar um atendimento.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col border-r">
        <div className="flex items-center justify-between px-4 pb-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="size-10">
              <AvatarImage alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div>
              <h2 className="font-semibold">
                John Doe
              </h2>

              <p className="text-sm text-emerald-500">
                • Online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button type="button" variant="ghost" size="icon">
              <SearchIcon className="size-5" />
            </Button>

            <Button type="button" variant="ghost" size="icon">
              <PhoneIcon className="size-5" />
            </Button>

            <Button type="button" variant="ghost" size="icon">
              <VideoIcon className="size-5" />
            </Button>

            <Button type="button" variant="ghost" size="icon">
              <MoreVerticalIcon className="size-5" />
            </Button>
          </div>
        </div>

        <ScrollArea className="h-[600px] p-4">
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              {capitalizedDate}
            </div>

            <div className="flex gap-3">
              <Avatar className="size-8">
                <AvatarImage alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    John Doe
                  </span>

                  <span className="text-xs text-muted-foreground">
                    09:07 AM
                  </span>
                </div>

                <p className="rounded-lg bg-muted p-3 text-sm tracking-wide">
                  Olá, Estou procurando alguém para criar um logotipo para meu novo negócio.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse gap-3">
              <Avatar className="size-8">
                <AvatarImage alt="Usuário" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>

              <div className="space-y-1">
                <div className="flex flex-row-reverse items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    09:14 AM
                  </span>

                  <span className="text-sm">
                    Você
                  </span>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <p className="rounded-lg bg-emerald-400 text-foreground p-3 text-sm tracking-wide dark:bg-emerald-600">
                    Você pode me contar um pouco mais sobre seu negócio e o estilo que você está
                    imaginando para o logotipo?
                  </p>

                  <div className="flex items-center">
                    <CheckCheckIcon className="size-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon">
              <MicIcon className="size-5" />
            </Button>

            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite uma nova mensagem"
              className="flex-1"
            />

            <Button type="button" variant="ghost" size="icon">
              <PaperclipIcon className="size-5" />
            </Button>

            <Button type="button" variant="ghost" size="icon">
              <SmileIcon className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}