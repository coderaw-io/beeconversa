import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CampaignCards } from "./_components/cards";
import { CampaignTabs } from "./_components/tabs";

export default function CampaignPage() {
  return (
    <>
      <div className="flex justify-between items-center pl-1">
        <PageHeader
          title="Minhas campanhas"
          description="Crie campanhas de marketing para prospectar via seus envios diários."
        />

        <Button
          type="button"
          size="lg"
          className="flex items-center gap-2"
        >
          <PlusIcon className="size-4" />
          Cadastrar uma nova campanha
        </Button>
      </div>

      <div className="py-8">
        <CampaignTabs />
        <CampaignCards />
      </div>
    </>
  )
}