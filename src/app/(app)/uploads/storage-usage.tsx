import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function StorageUsage() {
  return (
    <div className="space-y-4">
      <Progress value={60} className="h-2" />
      <div className="flex gap-4">
        <Badge variant="secondary" className="rounded-full text-foreground">
          <span className="size-2 rounded-full bg-blue-500 mr-1" />
          Word
        </Badge>

        <Badge variant="secondary" className="rounded-full text-foreground">
          <span className="size-2 rounded-full bg-green-500 mr-1" />
          Excel
        </Badge>

        <Badge variant="secondary" className="rounded-full text-foreground">
          <span className="size-2 rounded-full bg-zinc-500 mr-1" />
          Texto
        </Badge>

        <Badge variant="secondary" className="rounded-full text-foreground">
          <span className="size-2 rounded-full bg-red-500 mr-1" />
          PDF
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground">
        77 GB disponível de 150 GB do seu storage.
      </p>
    </div>
  )
}