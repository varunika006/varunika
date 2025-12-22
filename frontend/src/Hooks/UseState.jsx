import React from 'react'

const UseState = () => {
    const[count,setcount]=React.UseState(0);
    const handleIncrement=()=>{
        setcount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
        {/*<button onClick{()=>setCount(count+1)}>Increment</button>*/}
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default UseState