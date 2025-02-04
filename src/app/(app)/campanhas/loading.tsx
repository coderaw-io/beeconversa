import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function CampaignLoading() {
  return (
    <>
      <Card className="p-0 mt-8 mb-4">
        <div className="flex items-start justify-between p-6">
          <div className="flex gap-4">
            <Skeleton className="size-12 rounded" />
            <div className="flex flex-col space-y-1.5">
              <Skeleton className="h-9 w-52 rounded" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-32 rounded" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Skeleton className="h-9 w-20 rounded" />
            <Skeleton className="h-9 w-44 rounded" />
            <Skeleton className="size-9 rounded" />
          </div>
        </div>

        <Separator />

        <div className="flex justify-around items-center gap-6 px-6 py-10">
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
        </div>
      </Card>

      <Card className="p-0 mt-8 mb-4">
        <div className="flex items-start justify-between p-6">
          <div className="flex gap-4">
            <Skeleton className="size-12 rounded" />
            <div className="flex flex-col space-y-1.5">
              <Skeleton className="h-9 w-52 rounded" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-32 rounded" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Skeleton className="h-9 w-20 rounded" />
            <Skeleton className="h-9 w-44 rounded" />
            <Skeleton className="size-9 rounded" />
          </div>
        </div>

        <Separator />

        <div className="flex justify-around items-center gap-6 px-6 py-10">
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
          <div>
            <Skeleton className="h-9 w-52 rounded" />
            <Skeleton className="h-9 w-24 rounded mt-4" />
          </div>
        </div>
      </Card>
    </>
  )
}