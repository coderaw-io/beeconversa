import { storageKeys } from "@/config/storage-keys";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const accessToken = localStorage.getItem(storageKeys.accessToken);

  if (accessToken) router.push("/inicio");

  return (
    <>{children}</>
  )
}
