import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama();

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemMessage = {
    role: "system",
    content: "Por favor, responda todas as mensagens exclusivamente em português do Brasil. Seja breve e conciso em suas respostas, limitando-se a um ou dois parágrafos no máximo.",
  };

  const result = await streamText({
    model: ollama("tinyllama"),
    messages: [systemMessage, ...messages],
    maxTokens: 300
  });

  return result.toDataStreamResponse();
}