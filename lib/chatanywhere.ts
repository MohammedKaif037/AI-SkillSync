import type { AIModel } from "ai"

type ChatAnywhereModelId = "gpt-3.5-turbo" | "gpt-4" | "gpt-4-turbo"

export function chatanywhere(modelId: ChatAnywhereModelId): AIModel {
  return {
    id: `chatanywhere:${modelId}`,
    vendor: "chatanywhere",
    displayName: `ChatAnywhere ${modelId}`,
  }
}
