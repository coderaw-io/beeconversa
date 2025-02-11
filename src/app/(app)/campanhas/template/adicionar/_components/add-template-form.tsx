"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PageHeader } from "@/components/shared/page-header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircleDashedIcon, MessageSquareIcon } from "lucide-react";
import { useState } from "react";
import { AddTemplatePreview } from "./add-template-preview";

export function AddTemplateCampaignForm() {
  const [templateName, setTemplateName] = useState("");
  const [category, setCategory] = useState("");

  const [templateData, setTemplateData] = useState({
    header: "",
    body: "",
    footer: "",
    buttons: ["", ""],
  });

  const handleTemplateChange = (field: string, value: string, buttonIndex?: number) => {
    setTemplateData((prev) => {
      if (typeof buttonIndex === "number") {
        const newButtons = [...prev.buttons];
        newButtons[buttonIndex] = value;
        return { ...prev, buttons: newButtons };
      }
      return { ...prev, [field]: value }
    });
  }

  return (
    <>
      <div className="max-w-xl w-full 2xl:max-w-4xl 2xl:w-full">
        <PageHeader
          title="Adicionar novo template"
          description="Crie templates customizados de mensagens para seus envios no whatsapp."
        />

        <div className="flex flex-col space-y-8 py-6 pr-3">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="template-name" className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Nome do template
              </Label>

              <div className="relative">
                <Input
                  id="template-name"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="pr-12"
                  maxLength={50}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  {templateName.length}/50
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="template-category" className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Categoria do template
              </Label>

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categorias disponíveis</SelectLabel>
                    <SelectItem value="MARKETING">Marketing</SelectItem>
                    <SelectItem value="TRANSACTIONAL">Transacional</SelectItem>
                    <SelectItem value="AUTHENTICATION">Autenticação</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="template-type" className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-foreground" />
              Tipo de modelo - Em qual canal você gostaria de usar o modelo?
            </Label>

            <RadioGroup defaultValue="whatsapp" className="grid gap-4 md:grid-cols-2">
              <Label
                htmlFor="whatsapp"
                className="flex flex-col items-start gap-2 rounded-lg border p-4 hover:bg-muted/50 [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="whatsapp" id="whatsapp" className="sr-only" />
                <div className="flex w-full items-center justify-between">
                  <span className="font-medium">WhatsApp</span>
                  <MessageCircleDashedIcon className="size-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Crie templates de mensagens para iterações com clientes no whatsapp.
                </span>
              </Label>

              <Label
                htmlFor="sms"
                className="flex flex-col items-start gap-2 rounded-lg border p-4 hover:bg-muted/50 [&:has([data-state=checked])]:border-primary"
              >
                <RadioGroupItem value="sms" id="sms" className="sr-only" />
                <div className="flex w-full items-center justify-between">
                  <span className="font-medium">SMS</span>
                  <MessageSquareIcon className="size-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Crie templates customizáveis para envios e iterações com clientes via SMS.
                </span>
              </Label>
            </RadioGroup>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Cabeçalho da mensagem
              </Label>
              <Textarea
                value={templateData.header}
                onChange={(e) => handleTemplateChange("header", e.target.value)}
                placeholder="Digite o cabeçalho da mensagem"
              />
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Corpo da mensagem
              </Label>
              <Textarea
                value={templateData.body}
                onChange={(e) => handleTemplateChange("body", e.target.value)}
                placeholder="Digite o corpo da mensagem. Use {{1}} para incluir o nome do cliente"
              />
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Rodapé da mensagem (opcional)
              </Label>
              <Textarea
                value={templateData.footer}
                onChange={(e) => handleTemplateChange("footer", e.target.value)}
                placeholder="Digite o rodapé da mensagem"
              />
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-foreground" />
                Botões de ação
              </Label>

              <div className="grid gap-3">
                <Input
                  value={templateData.buttons[0]}
                  onChange={(e) => handleTemplateChange("buttons", e.target.value, 0)}
                  placeholder="Texto do botão de ação"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddTemplatePreview templateData={templateData} />
    </>
  )
}