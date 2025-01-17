import { PageHeader } from "@/components/shared/page-header";
import { UploadsContent } from "./content";
import { StorageUsage } from "./storage-usage";
import { UploadArea } from "./upload-area";

export default function UploadsPage() {
  return (
    <>
      <PageHeader
        title="Importações de arquivos"
        description="Faça upload de arquivos para adicionar a sua base de dados no sistema."
      />

      <div className="py-6 space-y-6">
        <UploadArea />
        <StorageUsage />
        <UploadsContent />
      </div>
    </>
  )
}
