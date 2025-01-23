"use client"

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useUploadContext } from "@/hooks/use-upload";

export function StorageUsage() {
  const {
    successfulUploads,
    failedUploads,
    duplicateFiles,
    uploadedFiles
  } = useUploadContext()

  if (!uploadedFiles) return null;

  const totalStorageUsed = uploadedFiles ? uploadedFiles.length : 0
  const storagePercentage = Math.min(Math.round((totalStorageUsed / 500) * 100), 100)

  return (
    <div className="space-y-4">
      <Progress value={storagePercentage} className="h-2" />

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-green-500 mr-1" />
            Importados ({successfulUploads})
          </Badge>

          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-red-500 mr-1" />
            Não importados ({failedUploads})
          </Badge>

          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-blue-500 mr-1" />
            Duplicados ({duplicateFiles})
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-violet-500 mr-1 animate-bounce" />
            {storagePercentage}%
          </Badge>

          <p className="text-sm text-muted-foreground">
            <strong>{totalStorageUsed} GB</strong> {" "}
            de arquivos importados na plataforma. {" "}
            Disponível um total de <strong>500 GB</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
