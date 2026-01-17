import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI strictly using process.env.API_KEY as a named parameter
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are TurfPro Assistant, a specialized concierge for a cricket turf booking platform. 
        Your goal is to help users find the best turf for their needs, explain booking procedures, 
        and answer cricket-related venue questions. 
        Keep responses concise, professional, and energetic.
        Mention that we have 3 top-tier turfs: Green Field Arena (Premium), The Pavilion (Budget/Practice), and Eden Sports Hub (Luxury/Corporate).`,
      }
    });
    // Use .text property to extract output from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to the pavilion. How else can I help you with your booking today?";
  }
};
