import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EditIcon, SearchIcon, Trash2Icon } from "lucide-react";

export function FileList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Button variant="default">Ver Todos</Button>
        <Button variant="outline">Arquivos Locais</Button>
        <Button variant="outline">Arquivos Remotos</Button>

        <div className="relative ml-auto max-w-sm w-full">
          <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
          <Input
            placeholder="Filtrar pelo nome do arquivo"
            className="pl-8 h-10"
            maxLength={60}
          />
        </div>
      </div>

      <div className="border rounded-[0.75rem]">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr className="text-left">
              <th className="p-4 font-medium">Nome do arquivo</th>
              <th className="p-4 font-medium">Data do upload</th>
              <th className="p-4 font-medium">Tamanho do arquivo</th>
              <th className="p-4 font-medium">Responsável</th>
              <th className="p-4 font-medium">Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <span className="text-xs text-red-700">PDF</span>
                  </div>

                  <div>
                    <p className="font-medium">leads-janeiro-2024.pdf</p>
                    <p className="text-sm text-muted-foreground">200 KB</p>
                  </div>
                </div>
              </td>

              <td className="p-4 text-muted-foreground">
                04 de Janeiro de 2024
              </td>

              <td className="p-4 text-muted-foreground">
                200 KB
              </td>

              <td className="p-4 text-muted-foreground">
                Linux Torvald's
              </td>

              <td className="p-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Trash2Icon className="size-4" />
                  </Button>

                  <Button variant="ghost" size="icon">
                    <EditIcon className="size-4" />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
