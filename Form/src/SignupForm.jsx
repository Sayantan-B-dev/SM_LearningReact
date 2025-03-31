import { useState } from "react"
import "./Signup.css"
function SignupForm(){
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const UpdateFirstName=(event)=>{
        setFirstName(event.target.value)
    }
    const UpdateLastName=(event)=>{
        setLastName(event.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(firstName,lastName)
    }
    return (
        <form action="">
            <div className="eachInput">
                <label htmlFor="username">Enter First Name</label>
                <input 
                type="text" 
                placeholder="Username" 
                value={firstName}
                onChange={UpdateFirstName}
                id="username"
                />
            </div>
            <div className="eachInput">
                <label htmlFor="username">Enter Last Name</label>
                <input 
                type="text" 
                placeholder="Username" 
                value={lastName}
                onChange={UpdateLastName}
                id="username"
                />
            </div>
            
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default SignupForm
