import Die from "./Die"
import "./Dice.css"
function Dice({dice,color}){
    return (
        <section className="Dice">
            {dice.map((v,i)=>{
                return <Die key={i} val={v} color={color}/>
            })}
        </section>
    )//always return from map
}
export default Dice