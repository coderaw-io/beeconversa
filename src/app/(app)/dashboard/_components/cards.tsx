import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CalendarCheck2Icon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"

const metrics = [
  {
    id: 1,
    title: "Campanhas",
    total: "16.500",
    percent: "3.7%",
    status: "growing",
    period: "01 de Janeiro de 2025 - 01 de Fevereiro de 2025"
  },
  {
    id: 2,
    title: "Envios",
    total: "342",
    percent: "1.8%",
    status: "decreasing",
    period: "01 de Dezembro de 2024 - 01 de Janeiro de 2025"
  },
  {
    id: 3,
    title: "Negociando",
    total: "1.024",
    percent: "2.1%",
    status: "growing",
    period: "01 de Dezembro de 2024 - 30 de Janeiro de 2025"
  },
  {
    id: 4,
    title: "Conversão de clientes",
    total: "9.403",
    percent: "2.5%",
    status: "growing",
    period: "01 de Dezembro de 2024 - 01 de Fevereiro de 2025"
  },
]

export function DashboardCards() {
  return (
    <div className="grid grid-cols-2 items-center gap-6 xl:grid-cols-4">
      {metrics.map((item) => (
        <Card key={item.id} className="p-0">
          <CardHeader className="hidden">
            <CardTitle className="sr-only">{item.title}</CardTitle>
            <CardDescription className="sr-only">Métricas do sistema</CardDescription>
          </CardHeader>

          <CardContent className="p-0">
            <div className="flex justify-between items-center p-6">
              <div className="flex flex-col space-y-1.5">
                <span className="text-xl">{item.title}</span>
                <h4 className="text-3xl font-bold xl:text-4xl">
                  {item.total}
                </h4>
              </div>

              <Badge className={cn(
                "rounded-sm text-sm flex items-center gap-2 px-4 hover:bg-foreground",
                item.status === "decreasing" ?
                  "bg-destructive text-red-100 dark:bg-red-100 dark:text-destructive" :
                  "bg-emerald-100 text-emerald-600 dark:bg-emerald-600 dark:text-emerald-100"
              )}>
                {item.status === "decreasing" ?
                  <TrendingDownIcon className="size-4" /> : <TrendingUpIcon className="size-4" />}
                {item.percent}
              </Badge>
            </div>

            <CardFooter className="flex items-center gap-2 text-muted-foreground text-[13px] leading-5 font-medium border-t py-4 truncate">
              <CalendarCheck2Icon className="size-4" />
              {item.period}
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}