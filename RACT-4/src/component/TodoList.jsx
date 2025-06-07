import { useState,useEffect } from "react"


export default function TodoList(){
const [data,setData]=useState([])

const todo=async ()=>{
    const res = await fetch(
     "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5"
   );
   const info =await res.json();
   setData(info);
   console.log(info)
   
}

     useEffect(()=>{todo},[])
    
    return(
        <div>
            <div>
                <input type="text" className="form-control"
                 />
                <button  className="btn">
                    add
                </button>
            </div>
            <div>
            
{data.map((i)=>{
<span>
    <i></i>
</span>
})}
            </div>
        </div>
    )
}