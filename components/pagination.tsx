"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  // Generate page numbers to display
  const generatePagination = () => {
    // If there are 7 or fewer pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Always include first and last page
    const firstPage = 1
    const lastPage = totalPages

    // Calculate middle pages
    const leftSiblingIndex = Math.max(currentPage - 1, firstPage)
    const rightSiblingIndex = Math.min(currentPage + 1, lastPage)

    // Don't show dots if only one position away
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < lastPage - 1

    // Default case: show dots on both sides
    if (shouldShowLeftDots && shouldShowRightDots) {
      return [1, "...", leftSiblingIndex, currentPage, rightSiblingIndex, "...", lastPage]
    }

    // Only show dots on right side
    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [1, 2, 3, 4, "...", lastPage]
    }

    // Only show dots on left side
    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [1, "...", lastPage - 3, lastPage - 2, lastPage - 1, lastPage]
    }

    // Fallback
    return [1, 2, 3, "...", lastPage - 2, lastPage - 1, lastPage]
  }

  const pages = generatePagination()

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageURL(currentPage - 1))}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {pages.map((page, i) =>
        page === "..." ? (
          <Button key={`ellipsis-${i}`} variant="outline" size="icon" disabled>
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More pages</span>
          </Button>
        ) : (
          <Button
            key={`page-${page}`}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => router.push(createPageURL(page as number))}
            className="hidden sm:inline-flex"
          >
            {page}
          </Button>
        ),
      )}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageURL(currentPage + 1))}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  )
}
