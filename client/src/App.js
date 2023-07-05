import {useState} from "react"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import { io } from "socket.io-client"

const App = () =>{
    const socket = io("http://localhost:5000");
    const [user, setUser] = useState("")
    const addUser =(username) =>{
        setUser(username)
    }
    return <div>
        {user ? (
            <>
                <div className="container">
                    <Navbar user= {user}/>
                    <Cards />
                </div>
            </>
        ) : (
            <>
                <Login user ={addUser}/>
            </>
        )}
        
        
    </div>
}
export default App

// Start working on like, comment functionality

