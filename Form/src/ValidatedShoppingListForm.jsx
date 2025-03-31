import { useState } from "react";
import "./Signup.css";

function ValidatedShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const [productValid,setProductValid]=useState(false)
  const validate=(product)=>{
    if(product.length===0){
        setProductValid(false)
    }else{
        setProductValid(true)
    }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name==="product"){
        validate(value)
    }
    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: name === "quantity"?(value === "" ? "" : Number(value)) : value,
      };
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(productValid){
        addItem(formData)
        setFormData({ product: "", quantity: "" })
        setProductValid(false); 
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
        {!productValid && <p style={{color:"red"}}>Product cannot be Empty</p>}
      <div className="eachInput">
        <label htmlFor="product">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          name="product"
          id="product"
          onChange={handleChange}
          value={formData.product}
        />
      </div>
      <div className="eachInput">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          placeholder="1"
          name="quantity"
          id="quantity"
          onChange={handleChange}
          value={formData.quantity}
          min="0" 
          step="1"
        />
      </div>
      <button disabled={!productValid} onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
export default ValidatedShoppingListForm;

