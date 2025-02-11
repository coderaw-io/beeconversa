import { PageHeader } from "@/components/shared/page-header";

export default function MessagesPage() {
  return (
    <div className="px-8">
      <PageHeader
        title="Mensagens SMS e interações"
        description="Visualize e filtre todos os disparos enviados dentro da nossa plataforma."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </div>
  )
}
