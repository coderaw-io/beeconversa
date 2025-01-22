import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function UploadsPagination() {
  return (
    <div className="pt-2">
      <div className="flex items-center justify-center gap-2 mt-6">
        <Button type="button" variant="ghost" size="icon">
          <ChevronLeftIcon className="size-4" />
        </Button>

        <Button type="button" size="sm" variant="outline" className="p-5">
          1
        </Button>

        <Button type="button" variant="ghost">2</Button>
        <Button type="button" variant="ghost">3</Button>

        <Button type="button" variant="ghost" size='icon'>
          <EllipsisIcon className="size-4" />
        </Button>

        <Button type="button" variant="ghost">10</Button>
        <Button type="button" variant="ghost">11</Button>
        <Button type="button" variant="ghost">12</Button>

        <Button type="button" variant="ghost" size="icon">
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  )
}