import UploadLoading from "../loading";

import { UploadedFileResult } from "@/@types/upload/upload";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { EditIcon, TrashIcon } from "lucide-react";
import { UploadsPagination } from "./pagination";

interface UploadsTableProps {
  uploads: UploadedFileResult[]
  isPending: boolean
  totalPages: number
  currentPage: number
}

export function UploadsTable({
  uploads,
  isPending,
  totalPages,
  currentPage
}: UploadsTableProps) {
  if (isPending) return <UploadLoading />

  return (
    <div className="space-y-4">
      <div className="border rounded-[0.75rem]">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr className="text-left">
              <th className="p-4 font-medium">Nome do arquivo</th>
              <th className="p-4 font-medium">Data do upload</th>
              <th className="p-4 font-medium">Linhas importadas</th>
              <th className="p-4 font-medium">Linhas não importadas</th>
              <th className="p-4 font-medium">Responsável</th>
              <th className="p-4 font-medium">Ações</th>
            </tr>
          </thead>

          <tbody>
            {uploads.length ?
              uploads.map((upload) => {
                const fileName = upload.filePath.split("/")[2]

                return (
                  <tr key={upload.id} className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="size-8 bg-emerald-100 rounded flex items-center justify-center">
                          <span className="text-xs text-emerald-700">CSV</span>
                        </div>

                        <div>
                          <p className="font-medium">{fileName}</p>
                          <p className="text-sm text-muted-foreground">
                            Total de {" "}
                            {upload.totalRows} {" "}
                            linhas neste arquivo.
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-muted-foreground">
                      {format(new Date(upload.creationDate).toLocaleDateString(), "dd/MM/yyyy")}
                    </td>

                    <td className="p-4 text-muted-foreground">{upload.totalRowsImported}</td>
                    <td className="p-4 text-muted-foreground">{upload.totalRowsNotImported}</td>
                    <td className="p-4 text-muted-foreground">{upload.user.name}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="size-4" />
                        </Button>

                        <Button variant="ghost" size="icon">
                          <EditIcon className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              }) : uploads.length > 0 ? <UploadLoading /> : (
                <tr className="h-28 w-full flex justify-center items-center">
                  Nenhum resultado encontrado.
                </tr>
              )}
          </tbody>
        </table>
      </div>
      <UploadsPagination />
    </div>
  )
}
