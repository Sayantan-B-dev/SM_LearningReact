import { useState } from "react";
function Counter(){
    console.log("rendered")
    const [count,setCount]=useState(0)
    const OneIncrement=()=>{
        setCount(count+1)
    }
    const ThreeIncrement=()=>{
        setCount(c => c+1)
        console.log(count)
        setCount(c => c+1)
        setCount(c => c+1)
    }
    const SetToTen=()=>{
        setCount(10)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={OneIncrement}>+1</button>
            <button onClick={ ThreeIncrement}>+3</button>
            <button onClick={ SetToTen}>10</button>
        </div>
    )
}

export default Counter