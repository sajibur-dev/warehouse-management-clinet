import axios from 'axios';
import { useEffect, useState } from "react";


export default function useToken(user){
    const [token,setToken] = useState('');
    useEffect(()=>{
            const getToken = async () => {
                const email = user?.user?.email;
                if(email){
                    const {data} = await axios.post('https://dry-mountain-82571.herokuapp.com/login',{email});
                    setToken(data);
                    localStorage.setItem('accessToken',data)
                }
            }
            getToken()
    },[user])
    return [token]
}