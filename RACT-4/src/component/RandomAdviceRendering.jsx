import { useState,useEffect } from "react"



export default function RandomAdviceRendering(){
    const[advice,setAdvice]=useState([])
  const random= async ()=>{
 const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
   return   setAdvice(data.slip.advice) 
   };

   useEffect(()=>{random},[])

   return(
     <div>
       <p> {advice}</p>
        <button onClick={random}>click</button>
    </div>
   )
}