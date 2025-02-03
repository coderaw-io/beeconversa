"use client"

import {
  ArrowRightIcon,
  CalendarIcon,
  FileDownIcon,
  SearchIcon,
  SlidersHorizontal
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CustomersFiltersSection() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1 max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
        <Input className="pl-10 h-10" placeholder="Filtrar cliente" />
      </div>

      <Button
        type="button"
        variant="outline"
        size="lg"
        className="h-10 w-28 flex items-center gap-2"
      >
        <SlidersHorizontal className="size-4" />
        <span className="text-sm">Filtros</span>
      </Button>

      <Button variant="outline" className="h-10 flex items-center gap-2">
        <CalendarIcon className="size-4" />
        <span className="flex items-center gap-2">
          01 de Dezembro 2025 
          <ArrowRightIcon className="size-3" />
          23 de Janeiro 2025
        </span>
      </Button>

      <Button
        type="button"
        className="bg-success ml-auto flex items-center gap-2 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-success"
      >
        <FileDownIcon />
        Exportar como CSV
      </Button>
    </div>
  )
}

