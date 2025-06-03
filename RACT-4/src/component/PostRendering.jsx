import { useState,useEffect } from "react";
import App from "../App";


export default function PostRendering(){
    const [post,setpost]=useState([])
    const API='https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{
        fetch(API).then((data)=>data.json()).then((info)=>setpost(info));
    },[])
    return(
        <div>
{
  post.length===0 ? <p>Loading...</p> : 
  <ul> <p> 'the posts here'</p>
    {post.map((item)=>{
     return <li key={item.id} style={{ marginBottom: "10px", background: "#f4f4f4", padding: "10px", borderRadius: "5px" }} >
        {item.title}
     </li>
    })}
  </ul>
}
        </div>
    )
}