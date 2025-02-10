import { Card } from "@/components/ui/card";

export function TemplatePreview() {
  return (
    <div className="hidden lg:block lg:flex-1 lg:h-[500px]">
      <Card className="overflow-hidden rounded-none">
        <div className="flex items-center gap-2 bg-[#26B893] text-white p-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/20">
          </div>
        </div>
        <div className="aspect-square bg-zinc-100" />
      </Card>
    </div>
  )
}