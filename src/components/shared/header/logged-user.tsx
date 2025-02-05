import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { storageKeys } from "@/config/storage-keys";
import { cookies } from "next/headers";

export async function LoggedUserDetails() {
  const cookieStore = await cookies();
  const userFirstName = cookieStore.get(storageKeys.userFirstName)?.value;
  const userLastName = cookieStore.get(storageKeys.userLastName)?.value;
  const rawEmail = cookieStore.get(storageKeys.userEmail)?.value;
  const userEmail = decodeURIComponent(rawEmail ? rawEmail : "");

  if (!userFirstName || !userLastName || !rawEmail) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="size-8 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2 pr-4">
      <Avatar className="size-9">
      <AvatarImage src="https://i.ibb.co/B58HgczL/8380015-removebg-preview.png" alt="User avatar" />
        <AvatarFallback>{userFirstName[0]}{userLastName[0]}</AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col">
        <p className="text-sm truncate">{userFirstName} {userLastName}</p>
        <span className="text-xs">{userEmail}</span>
      </div>
    </div>
  )
}