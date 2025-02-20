import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { ArrowLeftIcon } from "lucide-react";

export function OnboardingSendSMS() {
  const { previousStep, nextStep } = useStepper();

  return (
    <div>

      <div className="max-w-sm w-full flex items-center space-x-4 pt-2">
        <Button
          type="button"
          size="lg"
          variant="ghost"
          className="w-full flex items-center gap-2"
          onClick={() => previousStep()}
        >
          <ArrowLeftIcon className="size-4" />
          Voltar
        </Button>

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