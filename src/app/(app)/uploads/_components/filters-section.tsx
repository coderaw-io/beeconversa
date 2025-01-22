"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import {
  Calendar1,
  CalendarDaysIcon,
  EraserIcon,
  FilterIcon,
  SearchIcon
} from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { filterSchema } from "@/schemas/filter";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function UploadsFiltersSection() {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  });

  return (
    <Form {...form}>
      <div className="w-full flex items-center justify-between my-8">
        <div className="max-w-6xl w-full flex items-center justify-center space-x-6">
          <FormField
            control={form.control}
            name="fileName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                    <Input
                      className="w-full pl-10 h-11"
                      placeholder="Informe o arquivo que deseja filtrar"
                      maxLength={60}
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex items-center space-x-6">
            <FormField
              control={form.control}
              name="initDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 gap-1 items-center w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          className="max-w-sm w-full h-11 flex items-center justify-start text-left font-normal"
                        >
                          <Calendar1 className="size-5" />
                          {field.value ? format(field.value, "dd/MM/yyyy") : "Data inicial do período"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        locale={ptBR}
                        disabled={(date) => date > new Date() || date < new Date("01-01-1900")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 gap-1 items-center w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          type="button"
                          variant="outline"
                          className="max-w-sm w-full h-11 flex justify-start items-center text-left font-normal"
                        >
                          <CalendarDaysIcon className="size-5" />
                          {field.value ? format(field.value, "dd/MM/yyyy") : "Data final do período"}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={field.value ?? undefined}
                        onSelect={field.onChange}
                        locale={ptBR}
                        disabled={(date) => date > new Date() || date < new Date("01-01-1900")}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end items-center space-x-6">
          <Button
            type="button"
            variant="secondary"
            className="flex items-center gap-2"
            disabled
          >
            Limpar filtros
            <EraserIcon className="size-4" />
          </Button>

          <Button type="submit" className="flex items-center gap-2">
            Aplicar filtros
            <FilterIcon className="size-4" />
          </Button>
        </div>
      </div>
    </Form>
  )
}