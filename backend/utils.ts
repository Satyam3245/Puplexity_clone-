import { GoogleGenAI } from "@google/genai";
const apiKey : string = process.env.GEMINI_API_KEY || "null";
const genAI = new GoogleGenAI({apiKey});
export async function chatWithGemini(combinedPrompt : string){
    try {
        const result = await genAI.models.generateContent({
            model : "gemini-2.5-flash-lite",
            contents : [{
                parts : [{
                    text : combinedPrompt
                }]
            }]
        });

        const responseText = result.text;
        console.log("Gemini Text is : ", responseText);
        return responseText;        
    } catch (error:any) {
        console.error("Error calling Gemini:", error.message);
    }
}