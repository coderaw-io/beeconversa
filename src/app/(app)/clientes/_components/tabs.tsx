import {
  ArrowDownUpIcon,
  ArrowsUpFromLineIcon,
  PlusIcon,
  RefreshCcwIcon,
  UploadIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TabsProps {
  name: string;
  active: boolean;
  icon?: React.ReactNode
}

const tabs: TabsProps[] = [
  {
    name: "Ver todos",
    active: true
  },
  {
    name: "Mais recentes",
    active: false,
    icon: <ArrowsUpFromLineIcon />
  },
  {
    name: "Mais antigos",
    active: false,
    icon: <ArrowDownUpIcon />
  },
  {
    name: "Importados",
    active: false,
    icon: <UploadIcon />
  },
  {
    name: "Cadastrados",
    active: false,
    icon: <RefreshCcwIcon />
  },
]

export function CustomersTabs() {
  return (
    <div className="w-full flex justify-between items-center p-1 bg-transparent">
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <Button
            type="button"
            variant="outline"
            size="lg"
            key={tab.name}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              tab.active ?
                "bg-primary text-black font-semibold shadow-sm border-none" :
                "flex items-center gap-2 text-foreground dark:text-foreground",
            )}
          >
            {tab.icon}
            {tab.name}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button type="button"variant="secondary" className="flex items-center gap-2">
          <PlusIcon className="size-4" />
          Cadastrar um novo Cliente 
        </Button>
      </div>
    </div>
  )
}

