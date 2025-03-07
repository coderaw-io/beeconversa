import { Template } from "@/@types/campaign/template";
import { PageHeader } from "@/components/shared/page-header";
import { CampaignTemplateFilters } from "./_components/template-filters";
import { CampaignTemplateTable } from "./_components/template-table";

const templates: Template[] = [
  {
    name: "Template de Saudação",
    category: "Transacional",
    language: "Português",
    content: "Olá, seja muito bem vindo.",
    status: "in_review",
    lastUpdated: "10/10/2024",
  },
  {
    name: "Template de cobrança",
    category: "Transacional",
    language: "Português",
    content: "Seu plano pro expirou, faça a renovação agora.",
    status: "rejected",
    lastUpdated: "11/10/2024",
  },
  {
    name: "Teste",
    category: "Marketing",
    language: "Português",
    content: "Olá, conteúdo! editado via API.",
    status: "in_review",
    lastUpdated: "26/10/2024",
  },
  {
    name: "Teste template personalizado",
    category: "Marketing",
    language: "Português",
    content: "Olá, este é um conteúdo aleatório.",
    status: "in_review",
    lastUpdated: "26/12/2024",
  },
  {
    name: "Agendamentos",
    category: "Transacional",
    language: "Português",
    content: "Olá {{ customerName }}, seu compromisso está agendado para amanhã. Veja...",
    status: "active_pending",
    lastUpdated: "26/12/2024",
  },
  {
    name: "Novo Template",
    category: "Marketing",
    language: "Português",
    content: "Teste de template customizado.",
    status: "active_pending",
    lastUpdated: "31/12/2024",
  },
]

export default function CampaignTemplatePage() {
  return (
    <div className="px-8">
      <div className="pl-1">
        <PageHeader
          title="Meus templates de mensagens"
          description="Todos os templates de mensagens criados no sistema."
        />

        <div className="container py-4">
          <CampaignTemplateFilters />
          <CampaignTemplateTable templates={templates} />
        </div>
      </div>
    </div>
  )
}