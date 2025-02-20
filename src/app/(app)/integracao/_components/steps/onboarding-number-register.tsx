"use client"

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";

import { FlagBR } from "@/components/shared/icons/flag-br";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStepper } from "@/hooks/use-stepper";
import { OnboardingSchema } from "@/schemas/onboarding";
import { maskPhoneNumber } from "@/utils/masks/mask-phone-number";
import { CheckCheckIcon, PhoneCallIcon, VerifiedIcon } from "lucide-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { directDistanceDialing } from "../direct-distance-dialing";

export function OnboardingNumberRegister() {
  const { nextStep } = useStepper();

  const form = useFormContext<OnboardingSchema>();
  const phone = form.watch("phoneNumber");

  useEffect(() => {
    if (phone !== undefined) {
      form.setValue("phoneNumber", maskPhoneNumber(phone));
    }
  }, [form, phone]);

  function getDDD(phone: string | undefined) {
    if (!phone) return "Estado";

    const digits = phone.replace(/\D/g, "");
    const ddd = digits.length >= 2 ? digits.substring(0, 2) : null;

    if (!ddd) return "Estado";

    const matches = directDistanceDialing.filter(item => item.ddd === ddd);

    if (matches.length === 0) return "Estado";
    if (matches.length === 1) return matches[0].state;

    return matches.map(match => match.state).join(" ou ");
  }

  async function handleNextStep() {
    const isValid = await form.trigger([
      "phoneNumber",
      "verifiedName",
    ]);
    if (isValid) nextStep();
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6 pt-8 md:pt-16">
      <Badge className="flex items-center gap-2 bg-emerald-100 text-emerald-600 py-1 hover:bg-emerald-200 dark:bg-emerald-600 dark:text-emerald-100 dark:hover:bg-emerald-400">
        <CheckCheckIcon className="size-4" />
        Cadastrar Número
      </Badge>

      <div className="grid grid-cols-1 items-center gap-2">
        <h3 className="text-2xl font-bold md:text-3xl">
          {phone || "(DDD) Telefone"}
        </h3>

        <p className="flex justify-center items-center gap-2">
          <FlagBR className="size-6" />

          <span className="text-muted-foreground sm:text-lg">
            Brasil, {getDDD(phone) || "Estado"}
          </span>
        </p>
      </div>

      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <FormControl>
              <div className="relative flex-1">
                <PhoneCallIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  type="text"
                  placeholder="Informe o número de telefone"
                  className="pl-9 max-w-sm placeholder:pl-0.5"
                  {...field}
                />
              </div>
            </FormControl>
            <FormDescription>
              O telefone informado não deve estar cadastrado no Whatsapp.
            </FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="verifiedName"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
            <FormControl>
              <div className="relative flex-1">
                <VerifiedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

                <Input
                  type="text"
                  placeholder="Informe o nome e sobrenome"
                  className="pl-9 max-w-sm placeholder:pl-0.5"
                  {...field}
                />
              </div>
            </FormControl>
            <FormDescription>
              Informe o nome que deve ser exibido no seu número verificado.
            </FormDescription>
          </FormItem>
        )}
      />

      <div className="max-w-sm w-full pt-2">
        <Button
          type="button"
          size="lg"
          className="w-full"
          onClick={handleNextStep}
        >
          Próxima etapa
        </Button>
      </div>
    </div>
  )
}