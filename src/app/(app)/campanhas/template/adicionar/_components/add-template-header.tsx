import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export function AddTemplateHeader() {
  return (
    <header className="h-15 flex justify-between items-center gap-4 p-4">
      <Link href="/campanhas/template" className="flex items-center gap-2 text-muted-foreground hover:underline">
        <ArrowLeftIcon className="size-4" />
        Ver todos os templates
      </Link>

      <Button
        type="submit"
        size="lg"
      >
        Finalizar criação do template
      </Button>
    </header>
  )
}