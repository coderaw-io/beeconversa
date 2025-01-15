import { PageHeader } from "@/components/shared/page-header";

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="Bem vindo de volta"
        description="Utilize nossos serviços para prospectar novos leads na sua operação."
      />

      <div className="grid auto-rows-min gap-6 md:grid-cols-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-accent" />
        ))}
      </div>
    </>
  )
}