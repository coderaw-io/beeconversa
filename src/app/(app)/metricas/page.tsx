import { PageHeader } from "@/components/shared/page-header";

export default function MetricsPage() {
  return (
    <>
      <PageHeader
        title="Métricas e histórico"
        description="Gerencie o histórico, status e métricas referente a todos os seus envios no app."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}