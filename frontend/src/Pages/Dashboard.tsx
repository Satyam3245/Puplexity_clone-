import { createClient } from "@/lib/client"
import type { User } from "@supabase/supabase-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const supabase = createClient();
export default function Dashboard(){
    const [user,setUser] = useState<User|null>(null);
    const navigate = useNavigate();
    useEffect(()=>{
        async function getUser(){
            const {data,error} = await supabase.auth.getUser();
            if(data.user){
                setUser(data.user)
            }
        }
        getUser();
    },[]);
    
    useEffect(()=>{
        async function getExistingConversation(){
            if(user){
                const {data : {session}} = await supabase.auth.getSession();
                const jwt = session?.access_token;
                axios.get('http://localhost:3000/conversations',{
                    headers : {
                        Authorization: jwt
                    }
                })
            }
        };
        getExistingConversation();
    },[])

    return <div>
        {!user&& <button onClick={()=>{
            navigate("/auth")
        }}>Sign In</button>} 
        {user?.email}
        <button onClick={()=>{
           setUser(null);
           supabase.auth.signOut();
        }}>Log Out</button>
    </div>
}