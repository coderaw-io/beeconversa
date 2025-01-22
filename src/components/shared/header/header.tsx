import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "../../ui/tooltip";

import { SparklesIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { ChangeTheme } from "./change-theme";
import { CommandSearch } from "./command-search";
import { Notifications } from "./notifications";

export function Header() {
  const capitalizeFirstLetter = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const formatDate = () => {
    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    };

    const formattedDate = now.toLocaleDateString('pt-BR', options);
    return formattedDate.replace(/(^[a-zá-ú]+)/i, (match) => capitalizeFirstLetter(match));
  };

  return (
    <header className="bg-background sticky top-0 shrink-0 z-10 flex h-[70px] items-center gap-2 border-b border-border px-6 overflow-hidden">
      <div className="hidden md:flex items-center gap-6 w-full">
        <CommandSearch />

        <Badge className="hidden lg:flex bg-lime-200 text-foreground tracking-wider hover:bg-succes dark:text-background">
          <span className="size-2 rounded-full bg-emerald-900 mr-1 animate-pulse" />
          Versão Beta
        </Badge>

        <Separator orientation="vertical" className="hidden lg:flex h-6" />
        <span className="hidden lg:flex text-sm">{formatDate()}</span>
      </div>

      <div className="flex items-center space-x-6 lg:justify-end xl:w-full">
        <Button
          type="button"
          size="sm"
          className="hidden xl:flex items-center gap-2 h-9"
        >
          <SparklesIcon className="size-4" />
          Chat com IA
        </Button>

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
            <AvatarImage src="https://i.ibb.co/5MV0D9t/linux.jpg" alt="@linustorvalds" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col">
            <p className="text-sm truncate">Linus Torvald's</p>
            <span className="text-xs">linustorvalds@email.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}
