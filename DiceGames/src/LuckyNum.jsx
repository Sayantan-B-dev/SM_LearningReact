import { useState } from "react"
import {getRolls,sum}  from "./utils"
import Button from "./Button"
import Dice from "./Dice"
import "./LuckyNum.css"
function LuckyNum({numDice=3,winCheck}){
    const[dice,setDice]=useState(getRolls(numDice))
    const isWinner=winCheck(dice)

    const roll=()=>{
        setDice(getRolls(numDice))
    }
    return (
        <main className="LuckyNum">
            <h1>Lucky {isWinner && "You win"}</h1>
            <Dice dice={dice}/>
            <Button clickFunc={roll} label="reRoll"/>
        </main>
    )
}
export default LuckyNum