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

io.on("connection", (socket) => {
  console.log('Someone has been connected')
});


const start = async() => {
    try {
        await connectDb()
        httpServer.listen(5000);
    } catch (error) {
        console.log(error)
    }
}
start()