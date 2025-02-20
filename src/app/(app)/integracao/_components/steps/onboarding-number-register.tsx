"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStepper } from "@/hooks/use-stepper";
import { PhoneCallIcon, VerifiedIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function OnboardingNumberRegister() {
  const form = useForm();

  const { nextStep } = useStepper();

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-col justify-center items-center space-y-6 pt-8 md:pt-16">
      <Badge className="bg-emerald-100 text-emerald-600 py-1 w-24 hover:bg-emerald-200 dark:bg-emerald-600 dark:text-emerald-100 dark:hover:bg-emerald-400">
        Novo número
      </Badge>

      <div className="grid grid-cols-1 items-center gap-2">
        <h3 className="text-2xl font-bold md:text-3xl">
          {phoneNumber || "(11) 94002-8922"}
        </h3>

        <p className="text-muted-foreground sm:text-lg">
          Brasil, São Paulo
        </p>
      </div>

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative flex-1">
                <PhoneCallIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  type="text"
                  placeholder="(DDD) + Telefone"
                  className="pl-9 max-w-sm placeholder:pl-0.5"
                />
              </div>
            </FormControl>
            <FormDescription>
              O telefone informado não deve estar cadastrado no Whatsapp.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="verifiedName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative flex-1">
                <VerifiedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  type="text"
                  placeholder="Nome verificado"
                  className="pl-9 max-w-sm placeholder:pl-0.5"
                />
              </div>
            </FormControl>
            <FormDescription>
              Informe o nome que deve ser exibido no seu número verificado.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="max-w-sm w-full pt-2">
        <Button
          type="button"
          size="lg"
          className="w-full"
          onClick={() => nextStep()}
        >
          Próxima etapa
        </Button>
      </div>
    </div>
  )
}