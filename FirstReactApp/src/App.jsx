import './App.css'
import {Die,Greeter,Listpicker,DoubleDice,Footer,ColorList,SlotMachine} from "./Functions"
import ShoppingList from "./ShoppingList"

const data = [
  { id: 1, item: "Apples", quantity: 5, completed: false },
  { id: 2, item: "Bananas", quantity: 2, completed: true },
  { id: 3, item: "Oranges", quantity: 8, completed: false },
  { id: 4, item: "Milk", quantity: 1, completed: true },
  { id: 5, item: "Bread", quantity: 2, completed: false },
  { id: 6, item: "Eggs", quantity: 12, completed: true },
  { id: 7, item: "Rice", quantity: 3, completed: false },
  { id: 8, item: "Chicken", quantity: 1, completed: true },
  { id: 9, item: "Potatoes", quantity: 7, completed: false },
  { id: 10, item: "Tomatoes", quantity: 4, completed: true }
];


function App() {
  return (
    <>
    {/* <Greeter person="Sayantan" age="25"/>
    <Die num={25}/>
    <Listpicker values={[
        { name: "Anirban", age: 25 },
        { name: "Brinda", age: 22 },
        { name: "Chiranjit", age: 28 },
        { name: "Debjani", age: 24 },
        { name: "Eshita", age: 26 },
        { name: "Farhan", age: 23 },
        { name: "Gourav", age: 27 },
        { name: "Hiya", age: 21 },
        { name: "Indranil", age: 29 },
        { name: "Jui", age: 20 }
    ]} /> 
     <DoubleDice/>
     <ColorList 
        colors={[
            "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta",
            "lime", "teal", "indigo", "violet", "gold", "silver", "maroon", "navy", "olive", "coral"
        ]} 
    />
    <Footer styles={{width:"100%",bottom:"0",backgroundColor:"black",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} text="It's nice" fontSize="10px"/>
    <SlotMachine Elements={["🎰","🍒","💰"]}/>
     */}




      <ShoppingList items={data}/>



    </>
  )
}

export default App
