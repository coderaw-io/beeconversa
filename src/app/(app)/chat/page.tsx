"use client"

import {
  CloudUploadIcon,
  LoaderPinwheelIcon,
  MessageCircleIcon,
  MicIcon,
  SendIcon
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { type Message, useChat } from "ai/react"
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
              <h1 className="flex items-center gap-2 text-left text-3xl font-bold italic md:text-4xl xl:text-5xl">
                <Avatar className="size-11 rounded-[0.75rem] bg-foreground p-1 dark:bg-secondary">
                  <AvatarImage
                    src="https://i.ibb.co/3pffrSV/icon-transparent.png"
                    className="object-cover"
                    alt="@beeconversaIA"
                  />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>

                Beeconversa
                <strong className="text-yellow-400">IA</strong>
              </h1>

              <p className="text-muted-foreground xl:text-lg">
                O seu assistente de inteligência artificial da plataforma Beeconversa.
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
                  placeholder="Envie uma mensagem para o Beeconversa IA"
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
                    className="flex items-center gap-2 h-9"
                    disabled={!input.trim() || isLoading}
                  >
                    Iniciar conversa
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
    <div className="flex flex-col space-y-6 h-auto w-full mt-6">
      <div className="max-w-3xl w-full mx-auto flex-1 overflow-y-auto">
        {messages.map((message: Message) => (
          <div
            key={message.id}
            className={`mb-6 ${message.role !== "user" ?
              "flex justify-end items-center text-right gap-4" : "flex justify-start items-center text-left gap-4"}`}
          >
            <Avatar className={`mb-auto ${message.role === "user" ? "hidden" : "flex"}`}>
              <AvatarImage
                src={`${message.role !== "user" && "https://i.ibb.co/3pffrSV/icon-transparent.png"}`}
                className="object-cover bg-foreground p-1 dark:bg-secondary"
                alt="@beeconversaIA"
              />
              <AvatarFallback>
                {`${message.role === "user" ? "USR" : "BEE"}`}
              </AvatarFallback>
            </Avatar>

            <div
              className={`inline-block p-4 rounded-[1rem] ${message.role === "user" ?
                "bg-border text-foreground" : "bg-foreground text-background"
                }`}
            >
              {message.content}
            </div>

            <Avatar className={`mb-auto ${message.role !== "user" ? "hidden" : "flex"}`}>
              <AvatarImage
                src={`${message.role === "user" && "https://i.ibb.co/5MV0D9t/linux.jpg"}`}
                className="object-cover"
                alt="@user"
              />
              <AvatarFallback>
                {`${message.role === "user" ? "USR" : "BEE"}`}
              </AvatarFallback>
            </Avatar>
          </div>
        ))}
      </div>

      <Separator className="w-full" />

      <form onSubmit={handleSubmit} className="sticky bottom-0 shrink-0 z-10 max-w-3xl w-full mx-auto p-4">
        <div className="flex items-center space-x-2">
          <div className="relative w-full">
            <MessageCircleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />

            <Input
              className="flex-1 h-11 pl-10"
              placeholder="Digite sua mensagem"
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={!input.trim() || isLoading}>
            {isLoading ? (
              <>
                Gerando
                <LoaderPinwheelIcon className="ml-1 after:size-4 animate-spin" />
              </>
            ) : (
              <>
                Enviar
                <SendIcon className="ml-0.5 size-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      {errorMessage && (
        <div className="text-destructive text-center mx-4 mb-4">
          Erro interno ao processar mensagem. Tente novamente.
        </div>
      )}
    </div>
  )
}
