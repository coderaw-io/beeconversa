import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";

import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface IconNavLinkProps {
  href: string
  icon: LucideIcon
  tooltip: string
  isActive: boolean
}

export function IconNavLink({ href, icon: Icon, tooltip, isActive }: IconNavLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <NavLink href={href} icon={Icon} isActive={isActive} />
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function NavLink({ href, icon: Icon, isActive }: Pick<IconNavLinkProps, "href" | "icon" | "isActive">) {
  return (
    <Link href={href} passHref>
      <Button
        type="button"
        size="icon"
        variant="outline"
        className={isActive ? "bg-primary dark:bg-yellow-400 border-none" : ""}
      >
        <Icon
          className={`size-6 ${isActive ? "text-foreground dark:text-background" : ""}`}
        />
      </Button>
    </Link>
  )
}