import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useLogin=()=>{
    const [isLoading,setLoading] = useState(null);
    const [error,setError] = useState(null);
    const {dispatch} = useAuthContext();

    const login = async (email,password)=>{
        setLoading(true);
        setError(null);
        const response = await fetch("/api/user/login",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({email,password})
        })
        const json = await response.json()
        
        if(!response.ok){
            setLoading(false);
            setError(json.error);
        }
        if(response.ok){
            //save the user to local storage so even after reload jwt token we will stored in local storage
            localStorage.setItem("user",JSON.stringify(json))

            //update the auth context
            dispatch({type:"LOGIN",payload: json})

            setLoading(false);
        }
        
    }

    return {login,isLoading,error};
}