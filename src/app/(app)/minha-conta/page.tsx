import { PageHeader } from "@/components/shared/page-header";

export default function AccountPage() {
  return (
    <div className="px-8">
      <PageHeader
        title="Minha conta"
        description="Por aqui você visualiza e gerencia todos os seus dados dentro da plataforma."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </div>
  )
}