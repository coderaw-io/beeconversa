import { PageHeader } from "@/components/shared/page-header";

export default function UploadsPage() {
  return (
    <>
      <PageHeader
        title="Importações de arquivos"
        description="Faça upload de arquivos para adicionar a sua base de dados no sistema."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}