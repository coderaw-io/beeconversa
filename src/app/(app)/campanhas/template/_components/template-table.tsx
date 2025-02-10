import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon, EllipsisIcon } from "lucide-react";
import { Template } from "../page";

interface CampaignTemplateTableProps {
  templates: Template[]
}

export function CampaignTemplateTable({ templates }: CampaignTemplateTableProps) {
  return (
    <div className="mt-6 border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button type="button" variant="ghost" className="p-0 font-semibold ml-2 hover:bg-transparent">
                Template
                <ArrowUpDownIcon className="size-4 ml-2" />
              </Button>
            </TableHead>

            <TableHead>Status</TableHead>

            <TableHead>
              <Button type="button" variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                Linguagem - Mensagem
              </Button>
            </TableHead>

            <TableHead>
              <Button type="button" variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                Data de criação
                <ArrowUpDownIcon className="size-4 ml-2" />
              </Button>
            </TableHead>

            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.name}>
              <TableCell>
                <div className="pl-2">
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-muted-foreground">{template.category}</div>
                </div>
              </TableCell>

              <TableCell>
                {template.status === "in_review" && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 dark:bg-yellow-50">
                    Em revisão
                  </Badge>
                )}

                {template.status === "rejected" && <Badge variant="destructive">Recusado</Badge>}

                {template.status === "active_pending" && (
                  <Badge variant="outline" className="bg-success text-foreground dark:bg-emerald-200 dark:text-emerald-900">
                    Aprovado
                  </Badge>
                )}
              </TableCell>

              <TableCell>
                <div>
                  <div>{template.language}</div>
                  <div className="text-sm text-muted-foreground">{template.content}</div>
                </div>
              </TableCell>

              <TableCell>{template.lastUpdated}</TableCell>

              <TableCell>
                <Button type="button" variant="ghost" size="icon" className="mr-2">
                  <EllipsisIcon className="size-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}