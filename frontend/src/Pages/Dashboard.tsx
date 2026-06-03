import { createClient } from "@/lib/client"
import type { User } from "@supabase/supabase-js";
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