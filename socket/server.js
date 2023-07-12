import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDb from "./DB/connect.js";
import router from "./Route/route.js"
import cors from "cors"

const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", router)
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: ["http://localhost:3000"]
    }
});
let onlineUser = []
const addUser =(username, socket)=>{
    onlineUser.push({username,userId: socket.id})
}
const isUserOnline = (username) =>{
    for(let i=0; i<onlineUser.length; i++){
        if(onlineUser[i].username === username) {
            return true
        }
    }
    return false
}
const getUserId =(username) =>{
    for(let i=0; i<onlineUser.length; i++){
        if(onlineUser[i].username === username) {
            return onlineUser[i].userId
        }
    }
    return false
}

io.on("connection", (socket) => {
  socket.on("new_connection", (user) => {
    addUser(user, socket) 
  })
  socket.on("like", (message)=> {
    if(isUserOnline(message.to)){
        io.to(getUserId(message.to)).emit("pictureLiked", message.user)
    }else{
        console.log("user not online")
    }
  })
});
// Working on socket


const start = async() => {
    try {
        await connectDb()
        httpServer.listen(5000);
    } catch (error) {
        console.log(error)
    }
}
start()