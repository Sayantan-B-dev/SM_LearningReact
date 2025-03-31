import { useState } from "react"
import "./Signup.css"
function SignUpForm2(){
    const [formData, setFormData]=useState({firstName:"",lastName:"",password:""})
    const handleChange=(e)=>{
        e.preventDefault()
        // const changedField=e.target.name
        // const newValue=e.target.value
        // setFormData((currData)=>{
        //     currData[changedField]=newValue
        //     return {...currData}
        // })
        setFormData(currData=>{
            return {
                ...currData,
                [e.target.name]:e.target.value,
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData.firstName,formData.lastName,formData.password)
    }
    return (
        <form action="">
            <div className="eachInput">
                <label htmlFor="firstName">Enter First Name</label>
                <input 
                type="text" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
                />
            </div>
            <div className="eachInput">
                <label htmlFor="lastName">Enter Last Name</label>
                <input 
                type="text" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                name="lastName"
                />
            </div>
            <div className="eachInput">
                <label htmlFor="password">Enter Password</label>
                <input 
                type="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                />
            </div>
            
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default SignUpForm2
