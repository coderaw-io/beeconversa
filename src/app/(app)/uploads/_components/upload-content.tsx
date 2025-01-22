"use client"

import {
  ArrowDownUpIcon,
  FileDownIcon,
  SearchIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUploadContext } from "@/hooks/use-upload";
import { UploadsTable } from "./upload-table";

export function UploadsContent() {
  const {
    uploadedFiles,
    isLoading: isPending,
    currentPage,
    totalPages,
    pageSize,
    setCurrentPage,
    setPageSize,
  } = useUploadContext()

  return (
    <>
      <div className="pt-6 space-y-6">
        <div className="flex items-center gap-4">
          <Button type="button" variant="default">
            Ver Todos
          </Button>

          <Button type="button" variant="outline" className="flex items-center gap-2">
            <ArrowDownUpIcon className="size-4" />
            Mais antigos
          </Button>

          <div className="relative max-w-md w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

            <Input
              className="w-full pl-10 h-11"
              placeholder="Informe o arquivo que deseja filtrar"
              maxLength={60}
            />
          </div>

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

      <UploadsTable
        uploads={uploadedFiles || []}
        isPending={isPending}
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </>
  )
}