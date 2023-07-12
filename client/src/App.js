import {useState, useEffect} from "react"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import Cards from "./Components/Cards"
import { io } from "socket.io-client"

const App = () =>{
    const [socket, setSocket] = useState(null)
    const [user, setUser] = useState("")
    const [posts , setPosts] = useState([])
    useEffect(() =>{
        setSocket(io("http://localhost:5000"))
        
    }, [user])
    
    
    const addUser =(username) =>{
        setUser(username)
        socket.emit("new_connection", username)
    }
    
    useEffect(()=>{
        fetch("http://localhost:5000/api/v1/postimg")
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err))
    }, [user])

    return <div>
        {user ? (
            <>
                <div className="container">
                    <Navbar user= {user} socket={socket}/>
                    {posts.map(post => <Cards socket={socket} user= {user} post={post} key={post._id}/>)}
                    
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

// Read useref and how to select an element in react, manipulate a element in react.
// hide and show like notification


