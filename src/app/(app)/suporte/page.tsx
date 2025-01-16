import { PageHeader } from "@/components/shared/page-header";

export default function SupportPage() {
  return (
    <>
      <PageHeader
        title="Contate o nosso suporte"
        description="Problemas com a nossa plataforma? Fale com o nosso time de suporte."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}
