import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function StorageUsage() {
  return (
    <div className="space-y-4">
      <Progress value={60} className="h-2" />

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-green-500 mr-1" />
            Importados
          </Badge>

          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-red-500 mr-1" />
            Não importados
          </Badge>

          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-blue-500 mr-1" />
            Duplicados
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="rounded-full text-foreground">
            <span className="size-2 rounded-full bg-violet-500 mr-1 animate-bounce" />
            68%
          </Badge>

          <p className="text-sm text-muted-foreground">
            177 GB de arquivos importados na plataforma.
          </p>
        </div>
      </div>
    </div>
  )
}
