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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UploadsTable } from "./table";

export function UploadsContent() {
  return (
    <>
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
              <div className="w-full flex flex-col space-y-2">
                <Label>Nome do arquivo</Label>
                <Input
                  placeholder="Informe o arquivo que deseja filtrar"
                  className="w-full"
                  maxLength={100}
                />
              </div>

              <div className="w-full flex flex-col space-y-2">
                <Label>Data inicial</Label>
                <Input 
                  placeholder="Escolha a data de início do período" 
                  className="w-full"
                />
              </div>

              <div className="w-full flex flex-col space-y-2">
                <Label>Data final</Label>
                <Input 
                  placeholder="Escolha a data final do período" 
                  className="w-full"
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

              <Button type="button" className="flex items-center gap-2">
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
    </>
  )
}