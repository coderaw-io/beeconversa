"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ArrowRightIcon, LinkIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export function CommandSearch() {
  const [open, setOpen] = useState(false)

  const recentSearches = [
    "Dashboard",
    "Mensagens",
    "Métricas",
    "Minha conta",
    "Campanhas",
  ]

  return (
    <div className="hidden sm:flex max-w-64 w-full">
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-start gap-3 pl-4 text-muted-foreground hover:bg-background/80 hover:text-yellow-400"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="size-4" />
        <span>Pesquisa global</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <CommandInput placeholder="Buscar de forma global ..." />
            <CommandList>
              <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

              <CommandGroup heading="Links">
                {recentSearches.map((search) => (
                  <CommandItem key={search} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ArrowRightIcon className="mr-2 size-3" />
                      <span>{search}</span>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="size-8"
                    >
                      <LinkIcon className="size-3" />
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  )
}
