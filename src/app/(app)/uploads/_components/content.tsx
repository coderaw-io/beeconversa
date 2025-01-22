"use client"

import {
  ArrowDownUpIcon,
  FileDownIcon
} from "lucide-react";

import { UploadedFileResult } from "@/@types/upload/upload";
import { Button } from "@/components/ui/button";
import { UploadService } from "@/services/upload-service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { UploadsFiltersSection } from "./filters-section";
import { UploadsTable } from "./table";

export function UploadsContent() {
  const [page] = useState(1);
  const [pageSize] = useState(40);

  const { data: uploadData, isPending } = useQuery<UploadedFileResult[]>({
    queryKey: ["get-all-uploaded-files"],
    queryFn: async () => await UploadService.getAllUploadedFiles()
  })

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