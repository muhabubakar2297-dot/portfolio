
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const refinePortfolioContent = async (currentContent: string, instruction: string) => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';

  const prompt = `
    Act as a professional career consultant. The user is Muhammad Abu Bakar, a hybrid expert in Google Certified Data Analytics and Creative Graphic Design.
    Current Content: "${currentContent}"
    Instruction for Refinement: "${instruction}"
    
    The goal is to emphasize how data skills make designs strategic and design skills make data reports visually appealing. 
    The tone should be modern, dual-expertise, and appeal to business owners.
    
    Return ONLY the refined text.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      temperature: 0.7,
      topP: 0.8,
      topK: 40,
    },
  });

  return response.text;
};

export const generateServiceOffering = async () => {
  if (!API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';

  const response = await ai.models.generateContent({
    model,
    contents: `Write a 'Service Offering' section for Muhammad Abu Bakar, combining Data Analytics (Excel, SQL, Data Entry) and Graphic Design. Create 4 specific services that blend these skills. Format as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            category: { type: Type.STRING, enum: ['Data', 'Design', 'Hybrid'] }
          },
          required: ['title', 'description', 'category']
        }
      }
    }
  });

  return JSON.parse(response.text);
};
