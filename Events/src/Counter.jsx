import { useState,useEffect } from "react";
function Counter(){
    const [count,setCount]=useState(0)
    const [name, setName]=useState("")
    useEffect(function myEffect(){
        
    },[])
    const handleChange = e=>{
        setName(e.target.value)
    }
    const increment=()=>setCount(count=>count+1)
    const Decrement=()=>setCount(count=>count-1)
    return (
        <>
        <p>{count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={Decrement}>+1</button>
        <p>Name: {name}</p>
        <input value={name} onChange={handleChange} type="text" />
        </>
    )
}
export default Counter