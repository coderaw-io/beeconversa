"use client"

import MultipleSelector, { Option } from "@/components/ui/multi-selector";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { campaignFromCsvSchema, CampaignFromCsvSchema } from "@/schemas/campaign";
import { CampaignService } from "@/services/campaign-service";
import { UploadService } from "@/services/upload-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FileArchiveIcon, LoaderPinwheelIcon, RocketIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TabsContentLoading } from "./tabs-content-loading";

interface CampaignFromCsvsFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CampaignFromCsvsForm({ setIsOpen }: CampaignFromCsvsFormProps) {
  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CampaignFromCsvSchema>({
    resolver: zodResolver(campaignFromCsvSchema),
    defaultValues: {
      name: "",
      fileIds: []
    }
  });

  const { data: files, isPending } = useQuery({
    queryKey: ["get-all-files"],
    queryFn: async () => await UploadService.getAllUploadedFiles(),
  });

  if (isPending || !files) {
    return <TabsContentLoading />
  }

  const options: Option[] = files.map((option) => ({
    label: option.filePath ? option.filePath.split("/")[2] : "",
    value: option.id
  }));

  const onSubmit = handleSubmit(async data => {
    try {
      const formData = {
        name: data.name,
        fileIds: data.fileIds,
      }

      await CampaignService.createCampaignFromCsvs(formData);

      queryClient.invalidateQueries({
        queryKey: ["get-all-campaigns"],
        exact: true,
        refetchType: "all"
      });

      toast.success("Campanha criada com sucesso!", {
        description: "Sua campanha já esta ativa e pronta para os seus envios."
      });

      setIsOpen(false);
    } catch {
      toast.error("Ocorreu um erro ao cadastrar sua campanha, tente novamente.")
    }
  });

  return (
    <Card className="border-none shadow-none">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <CardTitle>
            Cadastrar uma nova campanha
          </CardTitle>
          <CardDescription>
            Crie uma campanha a partir de arquivos importados no sistema.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-4">
            <Label htmlFor="name" className="flex items-center gap-2">
              <RocketIcon className="size-4" />
              Nome da campanha
            </Label>

            <Input
              id="name"
              className={cn(
                errors?.name
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("name")}
              maxLength={100}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <Label htmlFor="fileIds" className="flex items-center gap-2">
              <FileArchiveIcon className="size-4" />
              Arquivos
            </Label>

            <Controller
              name="fileIds"
              control={control}
              render={({ field }) => (
                <MultipleSelector
                  className="h-28"
                  placeholder="Selecione os arquivos para esta campanha"
                  defaultOptions={options}
                  maxSelected={10}
                  value={field.value.map((id) => options.find((option) => option.value === id) || { value: id, label: id })}
                  onChange={(selectedOptions) => field.onChange(selectedOptions.map((option) => option.value))}
                  emptyIndicator={
                    <p className="text-center text-sm leading-10 text-muted-foreground">
                      Nenhum arquivo disponível para a seleção.
                    </p>
                  }
                />
              )}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-end items-center mt-2">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                Cadastrando
                <LoaderPinwheelIcon className="size-4 animate-spin" />
              </div>
            ) : "Cadastrar campanha"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}