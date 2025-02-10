import { Button } from "@/components/ui/button"

interface AddTemplatePreviewProps {
  templateData: {
    header: string
    body: string
    footer: string
    buttons: string[]
  }
}

export function AddTemplatePreview({ templateData }: AddTemplatePreviewProps) {
  return (
    <div className="hidden lg:block lg:flex-1 lg:size-full">
      <div className="border bg-card text-card-foreground shadow overflow-hidden rounded-none">
        <div className="flex items-center gap-2 bg-[#26B893] text-white p-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/20">
            <span className="text-sm">WA</span>
          </div>
          <span className="text-base font-medium">Preview do seu Template</span>
        </div>

        <div className="text-foreground p-6 h-[720px] space-y-4 bg-border dark:bg-background">
          <div className="rounded-xl border bg-card text-card-foreground dark:bg-zinc-700">
            {templateData.header ? (
              <div className="p-3">
                <p className="text-2xl font-bold">{templateData.header}</p>
              </div>
            ) : (
              <div className="p-3">
                <p className="text-2xl font-bold">
                  Informe o cabeçalho do seu template
                </p>
              </div>
            )}

            {templateData.body ? (
              <div className="p-3">
                <p className="text-xl">{templateData.body}</p>
              </div>
            ) : (
              <div className="p-3">
                <p className="text-xl">
                  Defina a mensagem do seu template.
                </p>
              </div>
            )}

            {templateData.footer ? (
              <div className="p-3">
                <p className="text-lg text-muted-foreground font-medium">
                  {templateData.footer}
                </p>
              </div>
            ) : (
              <div className="p-3">
                <p className="text-lg text-muted-foreground font-medium">
                  Informe o rodapé da mensagem do seu template.
                </p>
              </div>
            )}

            {templateData.buttons.some((button) => button) && (
              <div className="grid gap-2 border-t">
                {templateData.buttons.map(
                  (button, index) =>
                    button && (
                      <Button
                        key={index}
                        type="button"
                        variant="ghost"
                        size="lg"
                        className="w-full h-12 text-base text-center text-[#26B893] font-semibold rounded-none rounded-b-sm hover:bg-secondary hover:text-success dark:hover:bg-zinc-600 dark:hover:text-success"
                      >
                        {button}
                      </Button>
                    ),
                )}
              </div>
            )}

            <div className="border-t">
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="w-full h-12 text-base text-center text-[#26B893] font-semibold rounded-none rounded-b-sm hover:bg-secondary hover:text-success dark:hover:bg-zinc-600 dark:hover:text-success"
              >
                Parar de receber msgs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

