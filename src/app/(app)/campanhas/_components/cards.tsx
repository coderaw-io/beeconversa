"use client"

import {
  CalendarDaysIcon,
  CircleUserIcon,
  RocketIcon,
  Trash2Icon
} from "lucide-react";

import { ReportIsonIcon } from "@/components/shared/icons/report-ison-icon";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CampaignService } from "@/services/campaign-service";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

export function CampaignCards() {
  const { data: campaignData } = useQuery({
    queryKey: ['get-all-campaigns'],
    queryFn: async () => await CampaignService.getAllCampaigns(),
  });

  return (
    <>
      {
        campaignData?.length ?
          campaignData?.map((item) => (
            <Card key={item.id} className="p-0 mt-8 mb-4">
              <div className="flex items-start justify-between p-6">
                <div className="flex gap-4">
                  <div className="size-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <RocketIcon className="h-6 w-6 text-yellow-500" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <h3 className="font-semibold">
                      Campanha {item.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="size-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {format(item.creationDate, "dd/MM/yyyy")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="text-emerald-600 tracking-wider bg-green-50 border-green-100 hover:bg-emerald-600 hover:text-green-50 hover:border-green-500"
                  >
                    Ativa
                  </Button>

                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 h-9"
                  >
                    <CircleUserIcon className="size-4" />
                    Clientes cadastrados
                  </Button>

                  <Button type="button" variant="ghost" size="icon">
                    <Trash2Icon className="size-4" />
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex justify-around items-center gap-4 px-6 py-10">
                <div>
                  <div className="text-lg font-semibold md:text-xl">
                    {item.customers.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
                <div>
                  <div className="text-lg font-semibold md:text-xl">60.5%</div>
                  <div className="text-sm text-muted-foreground">Resposta</div>
                </div>
                <div>
                  <div className="text-lg font-semibold md:text-xl">17.3%</div>
                  <div className="text-sm text-muted-foreground">Visto</div>
                </div>
                <div>
                  <div className="text-lg font-semibold md:text-xl">1.2%</div>
                  <div className="text-sm text-muted-foreground">Clicado</div>
                </div>
              </div>
            </Card>
          )) : (
            <div className="flex justify-center items-center py-12">
              <div className="w-full flex justify-center items-center">
                <ReportIsonIcon className="size-36" />
              </div>

              Nenhum resultado encontrado.
            </div>
          )
      }
    </>
  )
}