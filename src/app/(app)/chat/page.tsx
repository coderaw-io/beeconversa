"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type Message, useChat } from "ai/react"
import { CloudUploadIcon, LoaderIcon, MicIcon, SendIcon } from "lucide-react"
import { useState } from "react"

export default function AIChatPage() {
  const [isConversationStarted, setIsConversationStarted] = useState(false)
  const [errorMessage] = useState<string | null>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const handleStartConversation = () => {
    if (input.trim()) {
      setIsConversationStarted(true)
      handleSubmit(new Event("submit") as any)
    }
  }

  if (!isConversationStarted) {
    return (
      <div className="min-h-full h-[600px] flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-3xl space-y-6">
            <div className="flex flex-col space-y-1.5">
              <h1 className="text-left text-3xl md:text-4xl font-bold">Bem vindo ao assistente de IA</h1>
              <p className="text-muted-foreground">
                O seu copiloto com tecnologia de Inteligência Artificial para o dia a dia.
              </p>
            </div>

            <div className="relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleStartConversation()
                }}
                className="flex items-center space-x-2 p-2 rounded-2xl border border-border"
              >
                <Button type="button" variant="ghost" size="icon" disabled={isLoading}>
                  <CloudUploadIcon className="size-4" />
                </Button>

                <Input
                  className="flex-1 bg-transparent border-0 ring-0 outline-none focus-visible:ring-0 shadow-none"
                  placeholder="Pergunte-me sobre qualquer assunto ..."
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />

                <div className="flex items-center gap-2">
                  <Button type="button" variant="ghost" size="icon" disabled={isLoading}>
                    <MicIcon className="size-4" />
                  </Button>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="sm"
                    className="flex items-center gap-2"
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar"}
                    <SendIcon className="size-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-auto max-w-3xl mx-auto">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message: Message) => (
          <div key={message.id} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block p-4 rounded-[1rem] ${message.role === "user" ?
                "bg-border text-foreground" : "bg-foreground text-background"
                }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Input
            className="flex-1"
            placeholder="Digite sua mensagem..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <Button type="submit" disabled={!input.trim() || isLoading}>
            {isLoading ? <LoaderIcon className="size-4 animate-spin" /> : (
              <>
                Enviar
                <SendIcon className="ml-2 size-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      {errorMessage && (
        <div className="text-red-500 text-center mx-4 mb-4">
          Erro interno ao processar mensagem. Tente novamente.
        </div>
      )}
    </div>
  )
}
