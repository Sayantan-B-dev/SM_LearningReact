import { useState } from "react";
import "./Toggler.css"
export default function Toggler(){
    const [isHappy,setIsHappy]=useState(true)
    const [count,setCount]=useState(0)
    const toggleIsHappy=()=>{
        setIsHappy(!isHappy)
    }
    const counter=()=>{
        console.log(count)
        setCount(count+1)
        console.log(count)
    }
    return (
        <>
        <p>{isHappy?"😊":"😔"}</p>
        <p>{count}</p>
        <button onClick={() => { counter(); toggleIsHappy(); }}>+</button>
        </>
    )
}