import {useState} from "react"
const Login = ({user}) =>{
    const [username, setUsername] = useState("")
    const handleSub = (e)=>{
        e.preventDefault()
        user(username)
        
    }
    return <form onSubmit={handleSub} className="login-form">
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">Login</button>
    </form>
}

export default Login