import { PageHeader } from "@/components/shared/page-header";

export default function CampaignPage() {
  return (
    <>
      <PageHeader
        title="Minhas campanhas"
        description="Crie campanhas de marketing para prospectar via seus envios diários."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}