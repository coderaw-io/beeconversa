import { Logo } from "@/components/shared/logo"
import { LoginForm } from "./form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-[400px] flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <Logo />
        </div>
        
        <LoginForm />
      </div>
    </div>
  )
}
