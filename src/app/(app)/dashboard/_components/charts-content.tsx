import { DashboardBarChartHorizontal } from "./bar-chart-horizontal";
import { DashboardBarChartInteractive } from "./bar-chart-interactive";

export function DashboardChartsContent() {
  return (
    <div className="w-full flex flex-col space-y-6 pt-8 xl:flex-row xl:items-center xl:gap-6 xl:space-y-0">
      <div className="w-full xl:max-w-lg xl:w-full">
        <DashboardBarChartHorizontal />
      </div>

      <div className="flex-1 max-w-full">
        <DashboardBarChartInteractive />
      </div>
    </div>
  )
}