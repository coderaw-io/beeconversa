import UploadLoading from "../loading";

import { UploadedFileResult } from "@/@types/upload/upload";
import { NetworkArrowUpIcon } from "@/components/shared/icons/network-arrow-up";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { TrashIcon } from "lucide-react";
import { UploadFileSkeleton } from "./upload-file-skeleton";
import { UploadsPagination } from "./upload-pagination";

interface UploadsTableProps {
  uploads: UploadedFileResult[]
  isPending: boolean
  totalPages: number
  totalResults: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export function UploadsTable({
  uploads,
  isPending,
  totalPages,
  totalResults,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
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
              <th className="p-4 text-center font-medium">Linhas importadas</th>
              <th className="p-4 text-center font-medium">Linhas não importadas</th>
              <th className="p-4 text-center font-medium">Responsável</th>
              <th className="p-4 font-medium">Ações</th>
            </tr>
          </thead>

          <tbody>
            {uploads.length ? (
              uploads.map((upload) => {
                const fileName = upload.filePath.split("/")[2];

                return (
                  <tr key={upload.id} className="border-b">
                    {upload.fileStatus === "InProgress" ? (
                      <UploadFileSkeleton fileId={upload.id} />
                    ) : (
                      <>
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="size-8 bg-emerald-100 rounded flex items-center justify-center">
                              <span className="text-xs text-emerald-700">CSV</span>
                            </div>

                            <div>
                              <p className="font-medium truncate">
                                {fileName}
                              </p>

                              <p className="text-sm text-muted-foreground truncate">
                                Total de {upload.totalRows} linhas neste arquivo.
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground">
                          {format(new Date(upload.creationDate).toLocaleDateString(), "dd/MM/yyyy")}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {upload.totalRowsImported}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {upload.totalRowsNotImported}
                        </td>
                        <td className="p-4 text-center text-muted-foreground">
                          {upload.user.name}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="hover:bg-destructive hover:text-foreground dark:hover:text-primary"
                            >
                              <TrashIcon className="size-4" />
                            </Button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr className="h-28 w-full">
                <td colSpan={6} className="text-center text-sm pt-6 pb-12 dark:text-zinc-600">
                  <div className="w-full flex justify-center items-center">
                    <NetworkArrowUpIcon className="size-36" />
                  </div>
                  Nenhum resultado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <UploadsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        pageSize={pageSize}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  )
}
