import { createClient } from "@/lib/client";
import type { User } from "@supabase/supabase-js";
import { useState } from "react";
import { useNavigate } from "react-router";
const supabase = createClient();
export default function Auth(){
    const [user,setUser] = useState<User|null>(null);
    const navigate = useNavigate();
    
    async function login(provider:"github"|"google"){
        const {data,error} = await supabase.auth.signInWithOAuth({
            provider : provider
        });
        if(error){
            alert("error while signing in")
        }else{
            alert("signed in ")
        }
    }

    return <div>
        <button onClick={()=>{
            login("google")

        }}>Login with Google</button>
        <button onClick={()=>{login("github")}}>Login with Github</button>
    </div>
}