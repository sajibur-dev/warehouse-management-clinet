import axios from 'axios';
import { useEffect, useState } from "react";


export default function useToken(user){
    const [token,setToken] = useState('');
    console.log(token);
    useEffect(()=>{
            const getToken = async () => {
                const email = user?.user?.email;
                if(email){
                    const {data} = await axios.post('http://localhost:5000/login',{email});
                    setToken(data);
                    localStorage.setItem('accessToken',data)
                }
            }
            getToken()
    },[user])
    return [token]
}