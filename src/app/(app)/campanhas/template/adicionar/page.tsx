import { Separator } from "@/components/ui/separator"
import { AddTemplateCampaignForm } from "./_components/add-template-form"
import { AddTemplateHeader } from "./_components/add-template-header"

export default function AddTemplateCampaignPage() {
  return (
    <div className="size-full flex flex-col space-y-6 pl-1 md:flex-row md:justify-between md:items-start md:space-y-0">
      <main className="w-full">
        <AddTemplateHeader />
        <Separator />
        <div className="max-w-full flex justify-center space-x-8 py-6 px-8">
          <AddTemplateCampaignForm />
        </div>
      </main>
    </div>
  )
}

