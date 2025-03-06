"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { useOnboardingContext } from "@/hooks/useOnboarding";
import { metaApi } from "@/lib/axios";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowLeftIcon, LockIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function OnboardingConfirmOtpCode() {
  const { previousStep, nextStep } = useStepper();
  const { numberId } = useOnboardingContext();

  const form = useFormContext();
  const isValidFormData = form.formState.isValid;
  const code = form.watch("code");

  async function handleSendOtpCode() {
    try {
      const sendSmsBody = {
        phoneNumberId: numberId,
        codeMethod: "Sms",
        language: "pt_BR"
      }

      await metaApi.post("/wabas/request-verification-code", sendSmsBody);

      await metaApi.post("/wabas/validate-verification-code", {
        phoneNumberId: numberId,
        code: code
      });

      nextStep();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6 pt-8 md:pt-16">
      <Badge className="flex items-center gap-2 bg-foreground text-background py-1 hover:bg-zinc-800 dark:hover:bg-zinc-300">
        <LockIcon className="size-4" />
        Verificação de Segurança
      </Badge>

      <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
          <FormItem className="flex flex-col items-center space-y-4">
            <FormLabel className="text-2xl font-bold md:text-3xl">
              Verificação de Segurança
            </FormLabel>
            <FormControl>
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot className="size-12" index={0} />
                  <InputOTPSlot className="size-12" index={1} />
                  <InputOTPSlot className="size-12" index={2} />
                  <InputOTPSlot className="size-12" index={3} />
                  <InputOTPSlot className="size-12" index={4} />
                  <InputOTPSlot className="size-12" index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
            <FormDescription>
              Informe o código enviado por SMS para validar o seu número.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="max-w-sm w-full flex items-center space-x-4 pt-2">
        <Button
          type="button"
          size="lg"
          variant="ghost"
          className="w-full flex items-center gap-2 hover:bg-transparent hover:text-link dark:hover:text-link"
          onClick={() => previousStep()}
        >
          <ArrowLeftIcon className="size-4" />
          Voltar
        </Button>

        <Button
          type="button"
          size="lg"
          className="w-full disabled:bg-muted disabled:cursor-not-allowed dark:disabled:bg-border dark:disabled:text-foreground"
          disabled={!isValidFormData}
          onClick={handleSendOtpCode}
        >
          Próxima etapa
        </Button>
      </div>
    </div>
  )
}