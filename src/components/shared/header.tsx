import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "../ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
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
    <header className="bg-background sticky top-0 shrink-0 flex h-[70px] items-center gap-2 border-b border-border px-6 overflow-hidden">
      <div className="w-full flex items-center gap-6">
        <CommandSearch />

        <Badge className="bg-success text-foreground tracking-wider hover:bg-emerald-400 dark:text-background">
          Free trial
        </Badge>

        <Separator orientation="vertical" className="h-6" />
        <span className="text-sm">{formatDate()}</span>
      </div>

      <div className="flex justify-end items-center space-x-6 xl:w-full">
        <Tooltip>
          <TooltipTrigger>
            <ChangeTheme />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Alterar tema</p>
          </TooltipContent>
        </Tooltip>

        <Notifications />
        <Separator orientation="vertical" className="mr-2 h-6" />

        <div className="flex items-center space-x-4 pr-4">
          <Avatar className="size-9">
            <AvatarImage src="https://i.ibb.co/5MV0D9t/linux.jpg" alt="@linux" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col">
            <p className="text-sm truncate">Linux Torvald's</p>
            <span className="text-xs">linux@email.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}