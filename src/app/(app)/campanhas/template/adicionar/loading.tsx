import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function AddTemplateCampaignLoading() {
  return (
    <div className="min-h-screen w-full flex flex-col space-y-6 overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-4 w-36" />
      </div>
      <Separator />
      <div className="flex justify-between items-center gap-8">
        <div className="max-w-xl w-full 2xl:max-w-4xl 2xl:w-full">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-12 w-80" />
            <Skeleton className="h-8 max-w-lg" />
          </div>

          <div className="grid grid-cols-1 items-center gap-6 pt-8 md:grid-cols-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>

          <div className="w-full flex flex-col space-y-6 pt-8">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        </div>

        <div className="flex-1 w-full">
          <Skeleton className="h-[600px] w-full" />
        </div>
      </div>
    </div>
  )
}