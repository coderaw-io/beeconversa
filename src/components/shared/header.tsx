import { BellDotIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ChangeTheme } from "./change-theme";

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
    <header className="sticky top-0 flex h-[70px] shrink-0 items-center gap-2 border-b border-border bg-background px-6">
      <div className="w-full flex items-center gap-3">
        <Badge className="bg-success text-foreground hover:bg-emerald-400">
          Free trial
        </Badge>
        <Separator orientation="vertical" className="mr-2 h-4" />
        {formatDate()}
      </div>

      <div className="w-full flex justify-end items-center space-x-6">
        <ChangeTheme />

        <Button
          type="button"
          variant="outline"
          size="icon"
        >
          <BellDotIcon className="size-6" />
        </Button>

        <Avatar className="size-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}