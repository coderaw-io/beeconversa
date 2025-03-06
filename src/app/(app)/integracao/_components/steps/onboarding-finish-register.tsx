"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { useOnboardingContext } from "@/hooks/useOnboarding";
import { ArrowLeftIcon, BadgeCheckIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function OnboardingFinishRegister() {
  const form = useFormContext();

  const { previousStep } = useStepper();

  const {
    numberId,
    phoneNumber,
    verifiedName,
  } = useOnboardingContext();

  return (
    <div className="flex flex-col justify-center items-center space-y-6 pt-8 md:pt-16">
      <Badge className="flex items-center gap-2 bg-emerald-100 text-emerald-600 py-1 hover:bg-emerald-200 dark:bg-emerald-600 dark:text-emerald-100 dark:hover:bg-emerald-400">
        <BadgeCheckIcon className="size-4" />
        Finalizar Cadastro
      </Badge>

      <div className="grid grid-cols-1 items-center gap-2">
        <h3 className="text-2xl font-bold md:text-3xl">
          Dados cadastrados
        </h3>

        <p className="flex justify-center items-center text-muted-foreground sm:text-lg">
          Verifique os dados digitados e finalize a configuração da sua conta.
        </p>
      </div>

      <ul className="list-disc text-foreground font-medium pt-6">
        <li>{numberId}</li>
        <li>{verifiedName}</li>
        <li>{phoneNumber}</li>
      </ul>

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
          type="submit"
          size="lg"
          className="w-full disabled:bg-muted disabled:cursor-not-allowed dark:disabled:bg-border dark:disabled:text-foreground"
          disabled={!form.formState.isSubmitting}
        >
          Finalizar cadastro
        </Button>
      </div>
    </div>
  )
}