"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { LoginSchema, loginSchema } from "@/schemas/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { LoaderPinwheelIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const route = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      tenant: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit() {
    try {
      const formData = {
        tenant: form.watch("tenant"),
        username: form.watch("username"),
        password: form.watch("password"),
      };

      await axios.post('/api/auth/sign-in', formData)

      toast.success("LOGIN EFETUADO COM SUCESSO ✅", {
        description: "Usuário autenticado com êxito."
      });

      route.push("/");
    } catch {
      toast.error("ERRO AO AUTENTICAR USUÁRIO ❌", {
        description: "Verifique as credenciais digitadas e tente novamente."
      });
    }
  }

  return (
    <Form {...form}>
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="pb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">
              Bem vindo(a) de volta
            </CardTitle>
            <CardDescription>
              Entre com sua conta Apple ou Google
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid items-center gap-6">
                  <FormField
                    name="tenant"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input
                            id="tenant"
                            type="text"
                            placeholder="Nome da sua empresa"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="username"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="exemplo@email.com"
                            required
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Senha</FormLabel>
                          <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                          >
                            Esqueceu sua senha?
                          </a>
                        </div>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="**********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ?
                      <LoaderPinwheelIcon className="size-4 animate-spin" />
                      : "Fazer login"}
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Não possui uma conta?{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-link">
                    Cadastrar
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-link">
          Ao clicar em continuar, você concorda com nossos <a href="#">Termos de Serviço</a>{" "}
          e <a href="#">Políticas de Privacidade</a>.
        </div>
      </div>
    </Form>
  )
}
