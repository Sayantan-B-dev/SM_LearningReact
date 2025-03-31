import { useState } from "react";
import "./Signup.css";

function ShoppingListForm({addItem}) {
  const [formData, setFormData] = useState({ product: "", quantity: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => {
      return {
        ...currentData,
        [name]: name === "quantity"?(value === "" ? "" : Number(value)) : value,
      };
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData.product,formData.quantity)
    addItem(formData)
    setFormData({ product: "", quantity: "" })
  }
  return (
    <form action="" onSubmit={handleSubmit}>
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
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
export default ShoppingListForm;
