import { UploadIcon } from "lucide-react";

export function UploadArea() {
  return (
    <div className="border-2 border-dashed rounded-[0.75rem] p-12 text-center">
      <div className="flex flex-col items-center gap-2">
        <UploadIcon className="w-8 h-8 text-muted-foreground" />

        <p className="text-sm text-muted-foreground">
          Clique para importar seu arquivo ou arraste e solte o arquivo aqui.
        </p>
      </div>
    </div>
  )
}