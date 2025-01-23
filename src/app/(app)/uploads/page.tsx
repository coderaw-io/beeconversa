import { PageHeader } from "@/components/shared/page-header";
import { UploadProvider } from "@/context/upload-context";
import { StorageUsage } from "./_components/storage-usage";
import { UploadArea } from "./_components/upload-area";
import { UploadsContent } from "./_components/upload-content";

export default function UploadsPage() {
  return (
    <UploadProvider>
      <PageHeader
        title="Importações de arquivos"
        description="Faça upload de arquivos para adicionar a sua base de dados no sistema."
      />

      <div className="py-8 pl-1 space-y-6">
        <UploadArea />
        <StorageUsage />
        <UploadsContent />
      </div>
    </UploadProvider>
  )
}
