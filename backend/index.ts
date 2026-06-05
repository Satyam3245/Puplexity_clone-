import express from "express";
import { tavily } from '@tavily/core';
import { GoogleGenAI } from "@google/genai";
import { PROMPT_TEMPLATE, SYSTEM_PROMPT } from "./prompt";
const client = tavily({ apiKey: process.env.TAVILY_API_KEY});
import cors from "cors";
import { chatWithGemini } from "./utils";


const app = express();

app.use(express.json());
app.use(cors());

app.get('/conversations',(req,res)=>{
    res.json({
        userid : req.userId
    })
})

app.get("/conversation/:conversationId",(req,res)=>{
    const {conversationId} = req.params;
    res.send("Conversation Id is :" + conversationId )
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

    res.send(responseText);
})

app.post('/followups',(req,res)=>{

})

app.listen(3001,()=>{
    console.log('Server is Listing to the Port ')
});