import { PageHeader } from "@/components/shared/page-header";
import { Separator } from "@/components/ui/separator";
import { OnboardingContent } from "./_components/onboarding-content";

export default function OnboardingPage() {
  return (
    <div>
      <div className="px-8 pb-4">
        <PageHeader
          title="Olá, vamos configurar sua conta?"
          description="Adicione o número de telefone responsável por gerenciar seu atendimento."
        />
      </div>
      <Separator />

      <OnboardingContent />
    </div>
  )
}