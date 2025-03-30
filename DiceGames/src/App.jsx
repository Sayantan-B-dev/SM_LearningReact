import LuckyNum from "./LuckyNum"
import './App.css'
import { d6, getRolls, sum } from "./utils"

function lessThan8(dice){
  return sum(dice)<8
}
function allSameValue(dice){
  return dice.every(e=>e===dice[0])
}
function App() {
  return (
    <>
      <LuckyNum winCheck={lessThan8}/>
      <LuckyNum numDice="2" winCheck={allSameValue}/>
    </>
  )
}

export default App
