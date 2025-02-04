import { Skeleton } from "@/components/ui/skeleton";

export function TabsContentLoading() {
  return (
    <div className="w-full grid grid-cols-1 items-center gap-4 px-4 pt-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-60" />
        <Skeleton className="h-6 w-60" />
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-6 w-96" />
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="flex flex-col space-y-2 pt-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-16 w-full" />
      </div>

      <div className="flex justify-end items-center pt-2">
        <Skeleton className="h-10 w-36" />
      </div>
    </div>
  )
}