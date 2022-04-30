import { useEffect, useState } from "react";


const useGetData = url => {
    const [data,setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(url);
            const data = await res.json()
            setData(data);
        }
        getData();
    },[url])
    return [data,setData];
}

export default useGetData;