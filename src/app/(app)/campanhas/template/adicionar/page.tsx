"use client"

import Link from "next/link"

import {
  ArrowLeftIcon,
  MessageCircleDashedIcon,
  MessageSquareIcon
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { TemplatePreview } from "./_components/template-preview"

export default function CampaignAddTemplatePage() {
  const [templateName, setTemplateName] = useState("")

  return (
    <div className="size-full flex flex-col space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
      <main className="w-full">
        <header className="h-15 flex justify-between items-center gap-4 p-4">
          <Link href="/campanhas/template" className="flex items-center gap-2 text-muted-foreground hover:underline">
            <ArrowLeftIcon className="size-4" />
            Ver todos os templates
          </Link>

          <Button
            type="submit"
            size="lg"
          >
            Finalizar criação do template
          </Button>
        </header>

        <Separator />

        <div className="max-w-full flex justify-center space-x-8 p-6">
          <div className="max-w-4xl w-full">
            <PageHeader
              title="Adicionar novo template"
              description="Crie templates customizados de mensagens para seus envios no whatsapp."
            />

            <div className="pt-4 space-y-6">
              <div className="flex flex-col space-y-8">
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
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        {templateName.length}/2
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="template-category" className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-foreground" />
                      Categoria do template
                    </Label>

                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Escolha uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categorias disponíveis</SelectLabel>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="transactional">Transacional</SelectItem>
                          <SelectItem value="authentication">Autenticação</SelectItem>
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
              </div>
            </div>
          </div>

          <TemplatePreview />
        </div>
      </main>
    </div>
  )
}