import express from "express";
import { tavily } from '@tavily/core';
import { GoogleGenAI } from "@google/genai";
import { PROMPT_TEMPLATE, SYSTEM_PROMPT } from "./prompt";
import { generateText } from "ai";
const client = tavily({ apiKey: process.env.TAVILY_API_KEY});
const apiKey : string = process.env.GEMINI_API_KEY || "null";

const genAI = new GoogleGenAI({apiKey});

const app = express();

app.use(express.json());

app.post("/signup",(req,res)=>{

})

app.post("/signin",(req,res)=>{
    
})


app.post("/perplexity_ask",async (req,res)=>{
    const query = req.body.query;

    const webSearch= await client.search(query, {
        searchDepth: "advanced"
    });

    const webSearchResults = webSearch.results;

    // console.log(webSearchResults)
    const combinedPrompt = `
        ${SYSTEM_PROMPT}
        ${PROMPT_TEMPLATE
        .replace("{{WEB_SEARCH_RESULTS}}", JSON.stringify(webSearchResults))
        .replace("{{USER_QUERY}}", query)}
    `;

    const responseText = await chatWithGemini(combinedPrompt);
    
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Connection", "keep-alive");

    res.flushHeaders();

    res.write(`data: ${responseText}\n\n`);

    webSearchResults.forEach(result => {
        res.write(`data: ${JSON.stringify(result)}\n\n`);
    });

    res.end();
})



async function chatWithGemini(combinedPrompt : string){
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


app.listen(3000,()=>{
    console.log('Server is Listing to the Port ')
});