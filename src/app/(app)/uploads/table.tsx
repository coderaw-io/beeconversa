import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";

const uploadsData = [
  {
    fileName: "lista-fria-dezembro-2024.csv",
    uploadDate: "02 de Dezembro de 2024",
    fileSize: "350 KB",
    responsible: "Ana Souza",
  },
  {
    fileName: "lista-fria-outubro(1).csv",
    uploadDate: "10 de Outubro de 2024",
    fileSize: "800 KB",
    responsible: "Roberto Almeida",
  },
  {
    fileName: "prospectos-clientes-parceiro.csv",
    uploadDate: "20 de Junho de 2024",
    fileSize: "1.5 MB",
    responsible: "Maria Fernanda",
  },
  {
    fileName: "leads-site.csv",
    uploadDate: "25 de Abril de 2024",
    fileSize: "500 KB",
    responsible: "Juliana Oliveira",
  },
  {
    fileName: "retrabalho-clientes.csv",
    uploadDate: "15 de Março de 2024",
    fileSize: "1.2 MB",
    responsible: "Carlos Lima",
  },
];

export function UploadsTable() {
  return (
    <div className="space-y-4">
      <div className="border rounded-[0.75rem]">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr className="text-left">
              <th className="p-4 font-medium">Nome do arquivo</th>
              <th className="p-4 font-medium">Data do upload</th>
              <th className="p-4 font-medium">Tamanho do arquivo</th>
              <th className="p-4 font-medium">Responsável</th>
              <th className="p-4 font-medium">Ações</th>
            </tr>
          </thead>

          <tbody>
            {uploadsData.map((upload, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="size-8 bg-emerald-100 rounded flex items-center justify-center">
                      <span className="text-xs text-emerald-700">
                        CSV
                      </span>
                    </div>

                    <div>
                      <p className="font-medium">{upload.fileName}</p>
                      <p className="text-sm text-muted-foreground">{upload.fileSize}</p>
                    </div>
                  </div>
                </td>

                <td className="p-4 text-muted-foreground">{upload.uploadDate}</td>
                <td className="p-4 text-muted-foreground">{upload.fileSize}</td>
                <td className="p-4 text-muted-foreground">{upload.responsible}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="size-4" />
                    </Button>

                    <Button variant="ghost" size="icon">
                      <EditIcon className="size-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
