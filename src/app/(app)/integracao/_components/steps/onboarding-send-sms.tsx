"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { useOnboardingContext } from "@/hooks/useOnboarding";
import { metaApi } from "@/lib/axios";
import { ArrowLeftIcon, LockIcon, MessageSquareDotIcon } from "lucide-react";

export function OnboardingSendSMS() {
  const { previousStep, nextStep } = useStepper();
  const { phoneNumber, verifiedName, setNumberId } = useOnboardingContext();

  async function handleGetNumberId() {
    try {
      await metaApi.post("/wabas", { wabaId: "586289244557914" });

      const sendNumberBody = {
        countryCode: "+55",
        phoneNumber: phoneNumber,
        verifiedName: verifiedName
      }

      const getNumberId = await metaApi.post("/wabas/phonenumber", sendNumberBody);
      if (!getNumberId) return;

      const phoneNumberId = getNumberId.data.phoneNumberId;

      setNumberId(phoneNumberId);
      nextStep();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-6 pt-8 md:pt-16">
      <Badge className="flex items-center gap-2 bg-yellow-100 text-yellow-600 py-1 hover:bg-yellow-200 dark:bg-yellow-400 dark:text-background dark:hover:bg-yellow-500">
        <LockIcon className="size-4" />
        Confirmação via SMS
      </Badge>

      <div className="grid grid-cols-1 items-center gap-2">
        <h3 className="text-2xl font-bold md:text-3xl">
          Verificação em duas etapas
        </h3>

        <p className="flex justify-center items-center gap-2">
          Para sua segurança, confirme o seu número <br />
          de telefone recebendo um código via SMS.
        </p>
      </div>

      <div className="max-w-sm w-full bg-card flex items-center space-x-4 text-card-foreground rounded-xl border shadow p-6">
        <div className="size-10 rounded-lg bg-foreground text-background flex items-center justify-center">
          <MessageSquareDotIcon className="size-6" />
        </div>

        <div className="flex flex-col space-y-1.5">
          <p className="text-xs">
            O código será enviado ao seguinte número:
          </p>

          <span className="font-medium">
            {phoneNumber}
          </span>
        </div>
      </div>

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
          className="w-full"
          onClick={handleGetNumberId}
        >
          Receber código
        </Button>
      </div>
    </div>
  )
}