import { useState,useEffect } from "react"


export default function TodoList(){
const []=useState([])

const todo=async ()=>{
    const res = await fetch(
     "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
   );
   const info =await res.json();
   console.log(info)
   
}

     useEffect(()=>{todo},[])
    
    return(
        <div>
{todo}
        </div>
    )
}