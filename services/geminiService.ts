import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

// Initialize Gemini Client
// IMPORTANT: Expects process.env.API_KEY to be set in the build environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    // Transform history to Gemini format if needed, but for simple chatContext we can just init a chat
    // For specific persona, we use systemInstruction.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try asking about Nihit's skills again in a moment.";
  }
};