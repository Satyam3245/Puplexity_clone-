import type { NextFunction, Request, Response } from "express";
import { createSupabaseClient } from "./client";

const client = createSupabaseClient();

export async function middleware(req:Request,res:Response,next:NextFunction){
    const header = req.headers.authorization;

    const data = await client.auth.getUser();
    const userId = data.data.user?.id;
    if (userId) {
        req.userId = userId
    }else{
        res.status(403).json({
            message:"Incorrect inputs "
        })
    }
}