
import { GoogleGenAI } from "@google/genai";

export async function getGearAdvice(experience: string, weight: string, goal: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `As a pump foil expert, recommend a setup (foil size, board type) for a rider with the following details:
  Experience Level: ${experience}
  Rider Weight: ${weight}
  Primary Goal: ${goal}
  
  Please provide a concise recommendation in Markdown format including specific wing areas (in cm2) and board volumes (in liters).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "Sorry, I couldn't generate advice right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the AI expert. Please try again later.";
  }
}

export async function findSpots(city: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Find the best spots for dock starting or pumping hydrofoils near ${city}. Focus on locations with public docks, low piers, or calm water.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });
    
    // Return text and also log grounding chunks for debugging
    const text = response.text || "No spots found for this location.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources: chunks };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "Failed to find spots. Try searching for a major coastal city.", sources: [] };
  }
}
