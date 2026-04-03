/**
 * Custom Sarvam AI Wrapper for AppVenture
 * Maps simplistic `.post('/chat', ...)` requests to the official Sarvam API endpoint.
 */

const SARVAM_API_URL = "https://api.sarvam.ai/v1/chat/completions";

interface SarvamMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface SarvamChatRequest {
  model: string;
  messages: SarvamMessage[];
  new_user_message: string;
}

export const sarvamAI = {
  post: async (endpoint: string, data: SarvamChatRequest) => {
    if (endpoint !== "/chat") {
      throw new Error("Currently only '/chat' endpoint is supported by this wrapper.");
    }

    const { model, messages, new_user_message } = data;

    // Combine history with the new message
    const combinedMessages = [
      ...messages,
      { role: "user", content: new_user_message }
    ];

    const apiKey = process.env.SARVAM_API_KEY;

    if (!apiKey) {
      throw new Error("SARVAM_API_KEY is not configured in .env.local");
    }

    const response = await fetch(SARVAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: combinedMessages,
        // (Optional: add temperature/max_tokens as needed)
      }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Sarvam AI API Error: ${errorText}`);
    }

    return await response.json();
  }
};
