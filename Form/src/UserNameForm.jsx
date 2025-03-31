import { useState } from "react"
function UserNameForm(){
    const [username, setUsername]=useState("")
    const UpdateValue=(event)=>{
        setUsername(event.target.value)
    }
    return (
        <form action="">
            <label htmlFor="username">Enter username</label>
            <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={UpdateValue}
            id="username"
            />
            <button>Submit</button>
        </form>
    )
}
export default UserNameForm