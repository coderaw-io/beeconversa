"use client"

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  CloudUploadIcon,
  HomeIcon,
  MessageCircleIcon,
  RocketIcon,
  Settings2Icon,
  UsersIcon
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../../ui/tooltip";

import { usePathname } from "next/navigation";
import { Button } from '../../ui/button';
import { Icon } from '../icons/icon';
import { IconNavLink } from "./icon-nav-link";
import { Logout } from "./logout";

const links = [
  { href: "/inicio", icon: HomeIcon, tooltip: "Início" },
  // { href: "/dashboard", icon: LayoutDashboardIcon, tooltip: "Dashboard" },
  { href: "/uploads", icon: CloudUploadIcon, tooltip: "Uploads" },
  { href: "/clientes", icon: UsersIcon, tooltip: "Clientes" },
  { href: "/campanhas", icon: RocketIcon, tooltip: "Campanhas" },
  { href: "/whatsapp", icon: MessageCircleIcon, tooltip: "Whatsapp" },
  // { href: "/emails", icon: MailsIcon, tooltip: "E-mails" },
  // { href: "/mensagens", icon: MessagesSquareIcon, tooltip: "SMS" },
  // { href: "/metricas", icon: ChartNoAxesColumnIcon, tooltip: "Métricas" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <Sidebar
        className="sticky top-0 shrink-0 min-h-screen bg-background w-[70px] border-r border-border"
        collapsible="none"
      >
        <div className='h-full'>
          <SidebarHeader className="h-[70px] border-b border-border">
            <div className="flex h-[70px] w-full items-center justify-center">
              <Icon />
            </div>
          </SidebarHeader>

          <SidebarContent className='h-full py-6'>
            <nav className="flex flex-col gap-6 p-4">
              {links.map(({ href, icon, tooltip }) => (
                <IconNavLink
                  key={tooltip}
                  href={href}
                  icon={icon}
                  tooltip={tooltip}
                  isActive={pathname === href}
                />
              ))}
            </nav>
          </SidebarContent>

          <SidebarFooter className='h-full mt-auto border-t border-border py-6 px-4 gap-6'>
            {/* <Link
              href="/suporte"
              className="flex items-center justify-center"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className={pathname === "/suporte" ? "bg-primary dark:bg-yellow-400 border-none" : ""}
                  >
                    <LifeBuoyIcon
                      className={`size-5 ${pathname === "/suporte" ? "text-foreground dark:text-background" : ""}`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Suporte</p>
                </TooltipContent>
              </Tooltip>
            </Link> */}

            <Link
              href="/minha-conta"
              className="flex items-center justify-center"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    className={pathname === "/minha-conta" ? "bg-primary dark:bg-yellow-400 border-none" : ""}
                  >
                    <Settings2Icon
                      className={`size-5 ${pathname === "/minha-conta" ? "text-foreground dark:text-background" : ""}`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Configurações</p>
                </TooltipContent>
              </Tooltip>
            </Link>

            <Logout />
          </SidebarFooter>
        </div>
      </Sidebar>
    </TooltipProvider>
  );
}
