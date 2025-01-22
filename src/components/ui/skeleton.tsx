import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#edede9] dark:bg-secondary", className)}
      {...props}
    />
  )
}

export { Skeleton }
