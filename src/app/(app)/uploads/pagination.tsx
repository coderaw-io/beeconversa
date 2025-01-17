import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function UploadsPagination() {
  return (
    <div className="flex justify-end items-center space-x-3">
      <Button
        type="button"
        variant="outline"
        size="sm"
      >
        <ChevronsLeftIcon className="size-5" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
      >
        <ChevronLeftIcon className="size-5" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
      >
        <ChevronRightIcon className="size-5" />
      </Button>

      <Button
        type="button"
        variant="outline"
        size="sm"
      >
        <ChevronsRightIcon />
      </Button>
    </div>
  )
}