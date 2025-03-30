import  { useState } from "react";

function Counter() {
    let [num, setNum] = useState(0);
    const randNum = () => {
        let n=Math.floor(Math.random()*100)+1
        setNum(num =n);
    }
    return (
        <div>
            <p>Random number: {num}</p>
            <button onClick={randNum}>Click</button>
        </div>
    );
}

export default Counter;