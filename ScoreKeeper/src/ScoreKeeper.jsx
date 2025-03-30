import { useState } from "react"
function ScoreKeeper({numPlayers,target}){
    const [scores,setScores]=useState(new Array(numPlayers).fill(0))
    function incrementScore(index){
        setScores((prevScores)=>{
            const copy=[...prevScores]
            copy[index]+=1
            return copy
        })
    }
    const reset=()=>{
        setScores(new Array(numPlayers).fill(0))
    }
    return (
        <div>
            <ul>
                {scores.map((score,index)=>{
                    return <li key={index}>Player {index+1}: {score} <button onClick={()=>{incrementScore(index)}}>+1</button>{score>=target&&"Winner"}</li>
                
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default ScoreKeeper