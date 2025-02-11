import Link from "next/link";

import { Button } from "@/components/ui/button";
import { LayoutPanelTopIcon } from "lucide-react";

export function AddTemplate() {
  return (
    <Link href="/campanhas/template/adicionar">
      <Button
        type="button"
        variant="secondary"
        className="h-9"
      >
        <LayoutPanelTopIcon />
        Adicionar template
      </Button>
    </Link>
  )
}