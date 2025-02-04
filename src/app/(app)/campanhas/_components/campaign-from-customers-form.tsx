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

import {
  CampaignFromCustomerSchema,
  campaignFromCustomerSchema
} from "@/schemas/campaign";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CampaignService } from "@/services/campaign-service";
import { CustomerService } from "@/services/customer-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LoaderPinwheelIcon, RocketIcon, UsersIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { TabsContentLoading } from "./tabs-content-loading";

interface CampaignFromCustomersFormProps {
  setIsOpen: (isOpen: boolean) => void
}

export function CampaignFromCustomersForm({ setIsOpen }: CampaignFromCustomersFormProps) {
  const queryClient = useQueryClient();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CampaignFromCustomerSchema>({
    resolver: zodResolver(campaignFromCustomerSchema),
    defaultValues: {
      name: "",
      customerIds: []
    }
  });

  const { data: customers, isPending } = useQuery({
    queryKey: ["get-all-customers"],
    queryFn: async () => await CustomerService.getAllCustomers(),
  });

  if (isPending || !customers) {
    return <TabsContentLoading />
  }

  const options: Option[] = customers.map((option) => ({
    label: option.name,
    value: option.id
  }));

  const onSubmit = handleSubmit(async data => {
    try {
      const formData = {
        name: data.name,
        customerIds: data.customerIds,
      }

      await CampaignService.createCampaignFromCustomer(formData);

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
            Crie uma campanha a partir de clientes cadastrados no sistema.
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
            <Label htmlFor="customerIds" className="flex items-center gap-2">
              <UsersIcon className="size-4" />
              Clientes
            </Label>

            <Controller
              name="customerIds"
              control={control}
              render={({ field }) => (
                <MultipleSelector
                  className="h-28"
                  placeholder="Selecione os clientes para esta campanha"
                  maxSelected={10}
                  defaultOptions={options}
                  value={field.value.map((id) => options.find((option) => option.value === id) || { value: id, label: id })}
                  onChange={(selectedOptions) => field.onChange(selectedOptions.map((option) => option.value))}
                  emptyIndicator={
                    <p className="text-center text-sm leading-10 text-muted-foreground">
                      Nenhum cliente disponível para a seleção.
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