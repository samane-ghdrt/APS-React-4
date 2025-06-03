import { useState,useEffect } from "react"



export default function RandomAdviceRendering(){
    const[advice,setAdvice]=useState([])
   useEffect(async ()=>{
 const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
   return   setAdvice(data.slip.advice) 
   },[])

   return(
     <div>
        {advice}
    </div>
   )
}