import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function LoggedUserDetails() {
  return (
    <div className="flex items-center space-x-4 pr-4">
      <Avatar className="size-9">
        <AvatarImage src="https://i.ibb.co/5MV0D9t/linux.jpg" alt="@black-adm" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>

      <div className="w-full flex flex-col">
        <p className="text-sm truncate">Matheus Madureira</p>
        <span className="text-xs">matheus.madureira@gmail.com</span>
      </div>
    </div>
  )
}