import React, { useState } from 'react'
import React,{UseEffect} from 'react'
const UseEffect = () => {
 const[count,setcount]=useState(0);
  const[value,setvalue]=useState(0);
UseEffect(()=>{
    console.log("UseEffect Mounted")
},[])
  return (
    <>
    <h1>{value}</h1>
        <div>UseEffect</div>
        <h1>{count}</h1>
        <button onclick ={()=>setcount(count+1)}>Increment</button>
    </>

  )
}

export default UseEffect