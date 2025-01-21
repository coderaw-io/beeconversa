"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Search, SlidersHorizontal } from "lucide-react"

export function CustomersFiltersSection() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
        <Input className="pl-10 h-11" placeholder="Filtrar contato" />
      </div>

      <Button variant="outline" size="icon">
        <SlidersHorizontal className="size-4" />
        <span className="sr-only">Filtros</span>
      </Button>

      <Button variant="outline" className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>01 de Dezembro - 21 de Janeiro - 2025</span>
      </Button>

      <Button 
        type="button" 
        className="ml-auto"
      >
        Baixar como arquivo CSV
      </Button>
    </div>
  )
}

