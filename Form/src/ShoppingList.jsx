import { useState } from "react"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm"
import {v4 as uuid} from "uuid"
function ShoppingList(){
    const [items,setItems]=useState([
        {id:1,product:"banana",quantity:8},
        {id:2,product:"mango",quantity:3}
    ])
    const addItems=(i)=>{
        setItems(currentItems=>{
            return [...currentItems,{...i,id:uuid()}]
        })
    }
    return(
        <div>
            <h1></h1>
            <ul>
                {items.map(i=><li key={i.id}>{i.product}-{i.quantity}</li>)}
            </ul>
          <ValidatedShoppingListForm addItem={addItems}/>
        </div>
    )
}
export default ShoppingList