"use client"

import {
  ArrowDownUpIcon,
  FileDownIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useUploadContext } from "@/hooks/use-upload";
import { useState } from "react";
import { UploadsFiltersSection } from "./filters-section";
import { UploadsTable } from "./upload-table";

export function UploadsContent() {
  const { uploadedFiles: uploadData, isLoading: isPending } = useUploadContext()
  const [page] = useState(1);
  const [pageSize] = useState(40);

  return (
    <>
      <div className="space-y-6">
        <UploadsFiltersSection />

        <div className="flex items-center gap-4">
          <Button type="button" variant="default">
            Ver Todos
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

      <UploadsTable
        uploads={uploadData ? uploadData : []}
        isPending={isPending}
        currentPage={page}
        totalPages={pageSize}
      />
    </>
  )
}