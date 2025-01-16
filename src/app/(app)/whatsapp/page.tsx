import { PageHeader } from "@/components/shared/page-header";

export default function WhatsappPage() {
  return (
    <>
      <PageHeader
        title="Minha operação pelo whatsapp"
        description="Gerencie e automatize processos da sua operação via whatsapp."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}
