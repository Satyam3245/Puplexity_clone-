import express from "express";
import { tavily } from '@tavily/core';
import { GoogleGenAI } from "@google/genai";


const client = tavily({ apiKey: process.env.TAVILY_API_KEY});
const apiKey : string = process.env.GEMINI_API_KEY || "null";

const genAI = new GoogleGenAI({apiKey});

const app = express();

app.use(express.json());

app.post("/perplexity_ask",async (req,res)=>{
    const query = req.body.query;

    const webSearch= await client.search(query, {
        searchDepth: "advanced"
    })
    const webSearchResults = webSearch.results;

    

})

app.listen(3000);