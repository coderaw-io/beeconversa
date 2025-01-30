import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SparklesIcon } from "lucide-react";
import { ChangeTheme } from "./change-theme";
import { CommandSearch } from "./command-search";
import { Notifications } from "./notifications";

export function Header() {
  return (
    <header className="bg-background sticky top-0 shrink-0 z-10 flex h-[70px] items-center gap-2 border-b border-border px-6 overflow-hidden">
      <div className="hidden md:flex items-center gap-6 w-full">
        <CommandSearch />

        <Link href="/chat">
          <Button
            type="button"
            size="sm"
            className="hidden xl:flex items-center gap-2 h-9"
          >
            <SparklesIcon className="size-4" />
            Chat com IA
          </Button>
        </Link>

        <Separator orientation="vertical" className="hidden lg:flex h-6" />

        <Badge className="hidden lg:flex bg-success text-foreground tracking-wider hover:bg-succes dark:text-secondary">
          <span className="size-2 rounded-full bg-foreground mr-1 animate-pulse dark:bg-secondary" />
          Versão Beta
        </Badge>
      </div>

      <div className="flex items-center space-x-6 lg:justify-end xl:w-full">
        <Notifications />

        <Tooltip>
          <TooltipTrigger>
            <ChangeTheme />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Alterar tema</p>
          </TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="mr-2 h-6" />

        <div className="flex items-center space-x-4 pr-4">
          <Avatar className="size-9">
            <AvatarImage src="https://i.ibb.co/5MV0D9t/linux.jpg" alt="@black-adm" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col">
            <p className="text-sm truncate">Matheus Madureira</p>
            <span className="text-xs">matheus.madureira@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}
