"use client"

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  ChartNoAxesColumnIcon,
  CloudUploadIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  RocketIcon,
  Settings2Icon
} from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";

import { Button } from '../ui/button';
import { Icon } from './icon';
import { Logout } from "./logout";

const links = [
  { href: "#", icon: HomeIcon, tooltip: "Início" },
  { href: "#", icon: LayoutDashboardIcon, tooltip: "Dashboard" },
  { href: "#", icon: CloudUploadIcon, tooltip: "Importações" },
  { href: "#", icon: RocketIcon, tooltip: "Campanhas" },
  { href: "#", icon: MessageSquareIcon, tooltip: "Mensagens" },
  { href: "#", icon: ChartNoAxesColumnIcon, tooltip: "Métricas" },
];

export function AppSidebar() {
  return (
    <TooltipProvider>
      <Sidebar className="bg-background w-[70px] border-r border-border" collapsible="none">
        <div className='min-h-screen border-b border-border'>
          <SidebarHeader className="h-[70px] border-b border-border">
            <div className="flex h-[70px] w-full items-center justify-center">
              <Icon />
            </div>
          </SidebarHeader>

          <SidebarContent className='py-6'>
            <nav className="flex flex-col gap-6 p-4">
              {links.map(({ href, icon: Icon, tooltip }) => (
                <Link key={tooltip} href={href} className="flex items-center justify-center">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button type="button" size="icon" variant="outline">
                        <Icon className="size-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              ))}
            </nav>
          </SidebarContent>

          <SidebarFooter className='mt-auto border-t border-border py-6 gap-6'>
            <Link
              href="#"
              className="flex items-center justify-center"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Button type="button" size="icon" variant="outline">
                    <Settings2Icon className="size-5" />
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
