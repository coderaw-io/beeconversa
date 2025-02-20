"use client"

import { onboardingSchema, OnboardingSchema } from "@/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Stepper } from "./onboarding-stepper";
import { OnboardingNumberRegister } from "./steps/onboarding-number-register";
import { OnboardingSendSMS } from "./steps/onboarding-send-sms";

export function OnboardingContent() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<OnboardingSchema>({
    resolver: zodResolver(onboardingSchema),
  });

  return (
    <FormProvider {...form}>
      <form>
        <Stepper
          steps={[
            {
              step: 1,
              title: "Cadastrar número de telefone",
              description: "Informe o telefone para gerenciar seus atendimentos.",
              content: <OnboardingNumberRegister />
            },
            {
              step: 2,
              title: "Receber código de verificação",
              description: "Receba o seu código via SMS para validar seu número.",
              content: <OnboardingSendSMS />
            },
            {
              step: 3,
              title: "Confirmar código de dois fatores",
              description: "Informe o código recebido via SMS no seu número.",
              content: <OnboardingSendSMS />
            },
            {
              step: 4,
              title: "Confirmação do cadastro",
              description: "Finalize o cadastro do número para gerenciar atendimento.",
              content: <OnboardingSendSMS />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}