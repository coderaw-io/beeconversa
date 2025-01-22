import { Skeleton } from "@/components/ui/skeleton";

export default function UploadLoading() {
  return (
    <main className="mt-3 flex flex-col space-y-3">
      <div className="flex gap-6 rounded-md shadow-md p-6">
        <Skeleton className="w-3/12 h-6 rounded" />
        <Skeleton className="w-1/5 h-6 rounded" />
        <Skeleton className="w-1/5 h-6 rounded" />
      </div>
      <div className="flex flex-col space-y-5 rounded-md shadow-md p-6">
        <Skeleton className="w-full h-6 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
      </div>
      <div className="flex justify-between items-center px-2">
        <Skeleton className="w-1/5 h-6 rounded" />
        <Skeleton className="w-1/12 h-6 rounded" />
      </div>
    </main>
  )
}