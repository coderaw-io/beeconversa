import { PageHeader } from "@/components/shared/page-header";
import { AddCampaign } from "./_components/add-campaign";
import { CampaignCards } from "./_components/campaign-cards";
import { CampaignTabs } from "./_components/tabs";

export default function CampaignPage() {
  return (
    <>
      <div className="flex justify-between items-center pl-1">
        <PageHeader
          title="Minhas campanhas"
          description="Crie campanhas de marketing para prospectar via seus envios diários."
        />

        <AddCampaign />
      </div>

      <div className="py-8">
        <CampaignTabs />
        <CampaignCards />
      </div>
    </>
  )
}