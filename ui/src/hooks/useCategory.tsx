import { useEffect, useState } from "react"
import { SelectOption } from "../interfaces";

const useCategory = ()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        
            const callApi = async()=>{
                const res = await fetch("/api/category/all");
                const resData = await res.json();
                setData(resData);
            }
            callApi();
    },[]);
    return data;
}

export default useCategory;