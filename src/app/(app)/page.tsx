import { PageHeader } from "@/components/shared/page-header";
import { TelescopeIcon, ZapIcon } from "lucide-react";
import { HomeExplorerSection } from "./explorer-section";
import { HomeGetStartedSection } from "./get-started-section";

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="Bem vindo de volta"
        description="Utilize nossa plataforma completa para prospectar novos leads na sua operação."
      />

      <div className="py-8 pl-1">
        <main className="container space-y-12">
          <section className="flex flex-col space-y-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              Vamos começar
              <ZapIcon className="size-6" />
            </h2>

            <HomeGetStartedSection />
          </section>

          <section className="flex flex-col space-y-4">
            <h4 className="flex items-center gap-2 text-xl font-semibold">
              Explorar Beeconversa
              <TelescopeIcon className="size-6" />
            </h4>

            <HomeExplorerSection />
          </section>
        </main>
      </div>
    </>
  )
}