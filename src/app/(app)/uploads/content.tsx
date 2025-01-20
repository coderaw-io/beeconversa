"use client"

import {
  ArrowDownUpIcon,
  ArrowsUpFromLineIcon,
  EraserIcon,
  FileDownIcon,
  FilterIcon
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { filterSchema } from "@/schemas/filter";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UploadsTable } from "./table";

export function UploadsContent() {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  });

  const onSubmit = async () => { }

  const handleSubmit = form.handleSubmit(onSubmit);

  return (
    <Form {...form}>
      <div className="space-y-6">
        <Card className="flex flex-col space-y-2 p-0">
          <CardHeader className="pt-6 pb-3 px-6">
            <CardTitle className="text-xl">Filtros de busca</CardTitle>
            <CardDescription className="text-base">
              Utilize os filtros disponíveis para realizar uma pesquisa mais acertiva.
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="grid grid-cols-1 items-center gap-6 py-4">
            <div className="flex items-center space-x-6">
              <FormField
                control={form.control}
                name="fileName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nome do arquivo</FormLabel>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="Informe o arquivo que deseja filtrar"
                        maxLength={60}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="initDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Filtrar pela data inicial</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            {field.value ? format(field.value, "dd/MM/yyyy") : "Data inicial do período"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-auto p-0" align="end">
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
                  <FormItem className="w-full">
                    <FormLabel>Filtrar pela data final</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            {field.value ? format(field.value, "dd/MM/yyyy") : "Data final do período"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>

                      <PopoverContent className="w-auto p-0" align="end">
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
          </CardContent>
        </Card>

        <div className="flex items-center gap-4">
          <Button type="button" variant="default">
            Ver Todos
          </Button>

          <Button type="button" variant="outline" className="flex items-center gap-2">
            <ArrowsUpFromLineIcon className="size-4" />
            Mais recentes
          </Button>

          <Button type="button" variant="outline" className="flex items-center gap-2">
            <ArrowDownUpIcon className="size-4" />
            Mais antigos
          </Button>

          <div className="w-full flex justify-end items-center">
            <Button
              type="button"
              variant="secondary"
              className="bg-success flex items-center gap-2 hover:text-success dark:bg-emerald-400 dark:text-background dark:hover:text-emerald-600"
            >
              <FileDownIcon className="size-4" />
              Exportar como CSV
            </Button>
          </div>
        </div>
      </div>

      <UploadsTable />
    </Form>
  )
}