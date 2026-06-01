import { createClient } from "@/lib/client";
const supabase = createClient();
export default function Auth(){
    
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
        <button onClick={()=>{login("google")}}>Login with Google</button>
        <button onClick={()=>{login("github")}}>Login with Github</button>
    </div>
}