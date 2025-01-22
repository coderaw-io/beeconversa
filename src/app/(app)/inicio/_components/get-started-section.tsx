import Link from "next/link";

import {
  ArrowRightIcon,
  ChartNoAxesColumnIcon,
  MessagesSquareIcon,
  UsersIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HomeGetStartedSection() {
  return (
    <div className="space-y-3">
      <Card className="flex items-center gap-4 p-4 border shadow-sm">
        <div className="size-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
          <UsersIcon className="size-5" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium">Adicione seus clientes na plataforma</p>
          <p className="text-xs text-muted-foreground">
            Importe contatos de um arquivo, um CRM ou contatos de anúncios manualmente. Você pode fazer todos os 3.
          </p>
        </div>

        <Link href="/clientes">
          <Button type="button" size="sm" className="flex items-center gap-2">
            Ver mais
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </Card>

      <Card className="flex items-center gap-4 p-4 border shadow-sm">
        <div className="size-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
          <MessagesSquareIcon className="size-5" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium">Configure sua operação de envios de mensagens</p>
          <p className="text-xs text-muted-foreground">
            Agende envios, faça envios individuais ou envios em massa, você pode utilizar as 3 opções.
          </p>
        </div>

        <Link href="/whatsapp">
          <Button type="button" size="sm" className="flex items-center gap-2">
            Ver mais
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </Card>

      <Card className="flex items-center gap-4 p-4 border shadow-sm">
        <div className="size-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
          <ChartNoAxesColumnIcon className="size-5" />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium">Gerencie logs e acompanhe as métricas dos envios</p>
          <p className="text-xs text-muted-foreground">
            Visualize os status dos envios, acompanhe logs, eventos e muito mais com dashboard's intuitivos.
          </p>
        </div>

        <Link href="/dashboard">
          <Button type="button" size="sm" className="flex items-center gap-2">
            Ver mais
            <ArrowRightIcon className="size-4" />
          </Button>
        </Link>
      </Card>
    </div>
  )
}