import { PageHeader } from "@/components/shared/page-header";

export default function SupportPage() {
  return (
    <div className="px-8">
      <PageHeader
        title="Suporte online"
        description="Problemas com a nossa plataforma? Fale com o nosso time de suporte."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </div>
  )
}
