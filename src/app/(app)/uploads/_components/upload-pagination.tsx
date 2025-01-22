import {
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface UploadsPaginationProps {
  currentPage: number
  totalPages: number
  totalResults: number
  pageSize: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
}

export function UploadsPagination({
  currentPage,
  totalPages,
  totalResults,
  pageSize,
  onPageChange,
}: UploadsPaginationProps) {
  const renderPageButtons = () => {
    const visiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2))
    const endPage = Math.min(totalPages, startPage + visiblePages - 1)

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1)
    }

    const pageButtons = []

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          type="button"
          size="sm"
          variant={currentPage === i ? "default" : "outline"}
          className="p-5 h-11"
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>,
      )
    }

    return pageButtons
  }

  return (
    <div className="p-2 flex items-center justify-between">
      <p>
        Exibindo {pageSize} de {totalResults} resultados.
      </p>

      <div className="flex items-center justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronsLeftIcon className="size-4" />
        </Button>

        {renderPageButtons()}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <>
            <Button type="button" variant="ghost" size="icon">
              <EllipsisIcon className="size-4" />
            </Button>

            <Button
              type="button"
              size="sm"
              variant="outline"
              className="p-5 h-11"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronsRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  )
}