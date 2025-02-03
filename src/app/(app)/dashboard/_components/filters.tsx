"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import {
  CalendarDaysIcon,
  SearchIcon,
  SlidersHorizontalIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";

export function DashboardFilters() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="flex justify-end items-center gap-4 xl:max-w-2xl xl:w-full">
      <div className="hidden xl:relative xl:flex flex-1 max-w-md pl-1">
        <SearchIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
        <Input className="pl-10 h-10 w-full" placeholder="Pesquisar métricas" />
      </div>

      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "flex justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarDaysIcon />
              {date ? format(date, "PPP") : <span>Filtrar por data</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button
          type="button"
          variant="outline"
        >
          <SlidersHorizontalIcon />
        </Button>
      </div>
    </div>
  )
}