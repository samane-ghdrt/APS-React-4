import { useState,useEffect } from "react";
import App from "../App";


export default function PostRendering(){
    const [post,setpost]=useState([])
    const API='https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(API).then((data)=>data.json()).then((info)=>console.log(info));
    },[])
    return(
        <div>

        </div>
    )
}