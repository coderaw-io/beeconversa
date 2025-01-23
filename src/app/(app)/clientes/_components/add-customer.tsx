"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import {
  ArrowLeftIcon,
  FingerprintIcon,
  LoaderPinwheelIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  User2Icon
} from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { addCustomerSchema, AddCustomerSchema } from "@/schemas/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function AddCustomer() {
  const form = useForm<AddCustomerSchema>({
    resolver: zodResolver(addCustomerSchema),
    defaultValues: {
      name: "",
      emails: [],
      phones: [],
      cpf: "",
    },
  });

  const onSubmit = form.handleSubmit(async data => {
    const formData = {
      name: data.name,
      emails: data.emails[0],
      phones: data.phones[0],
      cpf: data.cpf
    }

    console.log(formData);
    form.reset();
  });

  return (
    <Form {...form}>
      <Sheet>
        <SheetTrigger asChild>
          <Button type="button" variant="secondary" className="h-11 flex items-center gap-2">
            <PlusIcon className="size-4" />
            Cadastrar um novo Cliente
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
          <form onSubmit={onSubmit}>
            <SheetHeader className="p-6">
              <SheetTitle>Adicionar um novo cliente</SheetTitle>
              <SheetDescription>
                Preencha corretamente o formulário para cadastrar um novo cliente.
              </SheetDescription>
            </SheetHeader>
            <Separator className="h-0.5" />
            <div className="flex flex-col space-y-6 py-8 px-6 lg:space-y-8 xl:pt-12 xl:pb-24 xl:space-y-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <div className="w-full flex justify-between items-center space-x-6 md:space-x-8 xl:space-x-10">
                      <FormLabel className="w-12">Nome</FormLabel>
                      <FormControl className="w-full">
                        <div className="relative flex-1">
                          <User2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                          <Input
                            placeholder="Informe o nome completo do seu cliente"
                            className="h-11 w-full pl-10 pr-10"
                            maxLength={100}
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emails"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <div className="w-full flex justify-between items-center space-x-6 md:space-x-8 xl:space-x-10">
                      <FormLabel className="w-12">Email</FormLabel>
                      <FormControl className="w-full">
                        <div className="relative flex-1">
                          <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                          <Input
                            placeholder="Informe o e-mail do seu cliente"
                            className="h-11 w-full pl-10 pr-10"
                            maxLength={100}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="link"
                            size="sm"
                            className="absolute right-1.5 top-1/2 flex items-center gap-1 transform -translate-y-1/2"
                          >
                            <PlusIcon className="size-4" />
                            Adicionar
                          </Button>
                        </div>
                      </FormControl>
                    </div>
                    <FormDescription>
                      Você pode adicionar um ou mais e-mail's para este cliente.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phones"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <div className="w-full flex justify-between items-center space-x-6 md:space-x-8 xl:space-x-10">
                      <FormLabel className="w-12">Telefone</FormLabel>
                      <FormControl className="w-full">
                        <div className="relative flex-1">
                          <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                          <Input
                            placeholder="Informe o telefone do seu cliente"
                            className="h-11 w-full pl-10 pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="link"
                            size="sm"
                            className="absolute right-1.5 top-1/2 flex items-center gap-1 transform -translate-y-1/2"
                          >
                            <PlusIcon className="size-4" />
                            Adicionar
                          </Button>
                        </div>
                      </FormControl>
                    </div>
                    <FormDescription>
                      Você pode adicionar um ou mais telefones para este cliente.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <div className="w-full flex justify-between items-center space-x-6 md:space-x-8 xl:space-x-10">
                      <FormLabel className="w-12">CPF</FormLabel>
                      <FormControl className="w-full">
                        <div className="relative flex-1">
                          <FingerprintIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                          <Input
                            placeholder="Informe o CPF do seu cliente"
                            className="h-11 w-full pl-10 pr-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Separator className="h-0.5" />
            <SheetFooter className="pt-8 pb-6 px-8 gap-6">
              <SheetClose asChild>
                <Button type="button" variant="ghost" className="flex items-center gap-2">
                  <ArrowLeftIcon className="size-4" />
                  Voltar
                </Button>
              </SheetClose>

              <Button type="submit" className="h-10" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (
                  <LoaderPinwheelIcon className="size-4 animate-spin" />
                ) : "Finalizar cadastro"}
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>
    </Form>
  )
}