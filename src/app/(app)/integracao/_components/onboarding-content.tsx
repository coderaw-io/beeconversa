"use client"

import { useOnboardingContext } from "@/hooks/useOnboarding";
import { metaApi } from "@/lib/axios";
import { onboardingSchema, OnboardingSchema } from "@/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Stepper } from "./onboarding-stepper";
import { OnboardingConfirmOtpCode } from "./steps/onboarding-confirm-otp-code";
import { OnboardingFinishRegister } from "./steps/onboarding-finish-register";
import { OnboardingNumberRegister } from "./steps/onboarding-number-register";
import { OnboardingSendSMS } from "./steps/onboarding-send-sms";

export function OnboardingContent() {
  const [currentStep, setCurrentStep] = useState(0);

  const { numberId } = useOnboardingContext();

  const form = useForm<OnboardingSchema>({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = form.handleSubmit(async data => {
    try {
      await metaApi.post("/wabas/register", {
        phoneNumberId: numberId,
        pin: data.pin,
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
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
              content: <OnboardingConfirmOtpCode />
            },
            {
              step: 4,
              title: "Confirmação do cadastro",
              description: "Finalize o cadastro do número para gerenciar atendimento.",
              content: <OnboardingFinishRegister />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}