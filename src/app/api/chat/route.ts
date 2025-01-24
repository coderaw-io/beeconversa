import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama();

export async function POST(request: Request) {
  const { messages } = await request.json();

  const systemMessage = {
    role: "system",
    content: "Por favor, responda todas as mensagens exclusivamente em português do Brasil. Seja breve, conciso e com perfeição na ortografia em suas respostas, limitando-se a um ou dois parágrafos no máximo.",
  };

  const result = await streamText({
    model: ollama("splitpierre/bode-alpaca-pt-br"),
    messages: [systemMessage, ...messages],
    maxTokens: 300,
    temperature: 0.3
  });

  return result.toDataStreamResponse();
}