"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { CampaignFromCsvsForm } from "./campaign-from-csvs-form";
import { CampaignFromCustomersForm } from "./campaign-from-customers-form";

export function AddCampaign() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button
          type="button"
          size="lg"
          className="flex items-center gap-2"
        >
          <PlusIcon className="size-4" />
          Cadastrar uma nova campanha
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl w-full">
        <DialogHeader>
          <DialogTitle className="sr-only">Cadastrar uma nova campanha</DialogTitle>
          <DialogDescription className="sr-only">
            Crie uma nova campanha e vincule clientes á ela.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="account" className="w-full my-2">
          <TabsList className="max-w-lg w-full grid grid-cols-2">
            <TabsTrigger value="campaign-from-csv">
              Campanha a partir arquivos
            </TabsTrigger>
            <TabsTrigger value="campaign-from-customers">
              Campanha a partir de clientes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="campaign-from-csv">
            <CampaignFromCsvsForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </TabsContent>

          <TabsContent value="campaign-from-customers">
            <CampaignFromCustomersForm isOpen={isOpen} setIsOpen={setIsOpen} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}