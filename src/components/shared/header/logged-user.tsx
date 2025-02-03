"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthContext } from "@/hooks/use-auth";

export function LoggedUserDetails() {
  const { user } = useAuthContext();

  if (!user) return (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-8 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  )

  return (
    <div className="flex items-center space-x-2 pr-4">
      <Avatar className="size-9">
        <AvatarImage src="https://i.ibb.co/B58HgczL/8380015-removebg-preview.png" alt={user?.username} />
        <AvatarFallback>{user?.firstName[0]}{user?.lastName[0]}</AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col">
        <p className="text-sm truncate">{user?.firstName} {user?.lastName}</p>
        <span className="text-xs">{user?.email}</span>
      </div>
    </div>
  )
}