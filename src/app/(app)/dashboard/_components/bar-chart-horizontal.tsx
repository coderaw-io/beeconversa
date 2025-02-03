"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Separator } from "@/components/ui/separator"

import { Share2Icon, TrendingUpIcon } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "Janeiro", desktop: 186 },
  { month: "Fevereiro", desktop: 305 },
  { month: "Março", desktop: 237 },
  { month: "Abril", desktop: 73 },
  { month: "Maio", desktop: 209 },
  { month: "Junho", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Envios",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function DashboardBarChartHorizontal() {
  return (
    <Card className="h-auto p-0 xl:h-[438px]">
      <CardHeader className="p-6">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-lg bg-zinc-100 flex items-center justify-center dark:bg-border">
            <Share2Icon className="size-6 text-foreground" />
          </div>

          <div className="flex flex-col space-y-1.5">
            <CardTitle>Métricas de envios por período</CardTitle>
            <CardDescription>Janeiro 2025 - Junho 2025</CardDescription>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <ChartContainer config={chartConfig} className="h-52 w-full xl:h-56 xl:w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm pb-6">
        <div className="flex gap-2 font-medium leading-none">
          Tendência de alta de 5,2% neste semestre <TrendingUpIcon className="size-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Métricas baseadas no período semestral do ano atual.
        </div>
      </CardFooter>
    </Card>
  )
}
