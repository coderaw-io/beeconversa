import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Globe2Icon,
  PlusIcon,
  SearchIcon,
  Settings2Icon,
  TagIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CampaignTemplateFilters() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative font-medium">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
          <Input placeholder="Pesquisar template" className="pl-10 w-full md:w-[300px]" />
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <div className="flex items-center gap-2">
              <TagIcon className="size-4" />
              <SelectValue placeholder="Categoria" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="transactional">Transacional</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <div className="flex items-center gap-2">
              <Globe2Icon className="size-4" />
              <SelectValue placeholder="Linguagem" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">Inglês</SelectItem>
            <SelectItem value="spanish">Espanhol</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="icon">
          <Settings2Icon className="size-4" />
          <span className="sr-only">Namespace settings</span>
        </Button>
      </div>

      <Link href="/campanhas/template/adicionar">
        <Button
          type="button"
          size="lg"
          className="flex items-center gap-2"
        >
          <PlusIcon className="size-4" />
          Criar um novo template
        </Button>
      </Link>
    </div>
  )
}