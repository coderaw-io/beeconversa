import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CustomersPagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Button type="button" variant="ghost" size="icon">
        <ChevronLeft className="size-4" />
      </Button>

      <Button type="button" size="sm" variant="outline" className="p-5">
        1
      </Button>
      
      <Button type="button" variant="ghost">2</Button>
      <Button type="button" variant="ghost">3</Button>
      <Button type="button" variant="ghost">4</Button>

      <span className="px-2 text-lg">...</span>

      <Button type="button" variant="ghost">20</Button>

      <Button type="button" variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

