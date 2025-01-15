import { PageHeader } from "@/components/shared/page-header";

export default function MetricsPage() {
  return (
    <>
      <PageHeader
        title="Métricas e logs"
        description="Gerencie os logs, status e métricas referente a todos os seus disparos."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}