import { PageHeader } from "@/components/shared/page-header";

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        title="Contatos cadastrados"
        description="Gerencie todos os contatos dos seus clientes cadastrados."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}
