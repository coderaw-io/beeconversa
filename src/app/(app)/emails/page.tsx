import { PageHeader } from "@/components/shared/page-header";

export default function EmailsPage() {
  return (
    <>
      <PageHeader
        title="Minhas operações por e-mail"
        description="Controle, gerencie e domine suas campanhas via e-mail."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}