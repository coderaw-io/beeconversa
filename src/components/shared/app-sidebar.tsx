"use client"

import iconImg from '@/assets/images/icon-black.png'
import Image from 'next/image'
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"

import {
  HomeIcon,
  LogOutIcon,
  NetworkIcon,
  PlusIcon,
  RefreshCwIcon,
  Settings2Icon
} from 'lucide-react'

import { Button } from '../ui/button'

export function AppSidebar() {
  return (
    <Sidebar className="w-[70px] border-r border-foreground" collapsible="none">
      <div className='min-h-screen border-b border-foreground'>
        <SidebarHeader className="h-[70px] border-b border-foreground">
          <div className="flex h-[70px] w-full items-center justify-center">
            <Image
              src={iconImg}
              width={420}
              height={400}
              className='w-10 rounded-[0.75rem]'
              alt="logo"
            />
          </div>
        </SidebarHeader>

        <SidebarContent className='py-6'>
          <nav className="flex flex-col gap-6 p-4">
            <Link
              href="#"
              className="flex items-center justify-center"
            >
              <Button type="button" size="icon" variant="outline">
                <PlusIcon className="size-6" />
              </Button>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center"
            >
              <Button type="button" size="icon" variant="outline">
                <HomeIcon className="size-6" />
              </Button>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center"
            >
              <Button type="button" size="icon" variant="outline">
                <RefreshCwIcon className="size-6" />
              </Button>
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center"
            >
              <Button type="button" size="icon" variant="outline">
                <NetworkIcon className="size-6" />
              </Button>
            </Link>
          </nav>
        </SidebarContent>

        <SidebarFooter className='mt-auto border-t border-foreground py-6 gap-6'>
          <Link
            href="#"
            className="flex items-center justify-center"
          >
            <Button type="button" size="icon" variant="outline">
              <Settings2Icon className="size-5" />
            </Button>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center"
          >
            <Button type="button" size="icon" variant="outline" className="text-destructive">
              <LogOutIcon className="size-5" />
            </Button>
          </Link>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}

