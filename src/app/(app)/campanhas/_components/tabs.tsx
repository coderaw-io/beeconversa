import {
  FileDownIcon,
  GlobeIcon,
  SearchIcon,
  WifiOffIcon
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TabsProps {
  name: string;
  active: boolean;
  length: number;
  icon?: React.ReactNode;
}

const tabs: TabsProps[] = [
  {
    name: "Ver todas",
    active: true,
    length: 12
  },
  {
    name: "Ativadas",
    active: false,
    length: 9,
    icon: <GlobeIcon />
  },
  {
    name: "Desativadas",
    active: false,
    length: 3,
    icon: <WifiOffIcon />
  },
]

export function CampaignTabs() {
  return (
    <div className="w-full flex justify-between items-center p-1">
      <div className="w-full flex items-center gap-4">
        {tabs.map((tab) => (
          <Button
            type="button"
            variant="outline"
            size="lg"
            key={tab.name}
            className={cn(
              "h-11 px-4 py-2 text-sm rounded-md transition-colors",
              tab.active ?
                "bg-primary text-black font-semibold shadow-sm border-none" :
                "flex items-center gap-2 text-foreground dark:text-foreground",
            )}
          >
            {tab.icon}
            {tab.name}
            <Badge className={cn(
              "bg-border rounded-sm",
              tab.active ?
                "bg-foreground text-primary dark:bg-background dark:text-yellow-400" :
                "text-foreground",
            )}>
              {tab.length}
            </Badge>
          </Button>
        ))}

        <div className="relative flex-1 max-w-xs">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
          <Input className="pl-10 h-10 w-full" placeholder="Filtrar campanha" />
        </div>
      </div>

      <Button
        type="button"
        size="lg"
        className="bg-success ml-auto flex items-center gap-2 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-success"
      >
        <FileDownIcon />
        Exportar como CSV
      </Button>
    </div>
  )
}

