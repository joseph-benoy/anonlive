import 'dotenv/config';
import express from 'express';
import http from "http";
import {Server} from "socket.io";
import router from './routes/APIv1/index.js';
import chatRoomHandler from './services/chatRoom.js';
import cookieParser from "cookie-parser";
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("<h1>AnonLive</h1>");
})

app.use("/api",router);

const chatRoom = io.of("/chatroom");
chatRoom.on("connection",chatRoomHandler);

app.use((err,req,res,next)=>{
    res.status(500).json(err);
})


httpServer.listen(process.env.HTTP_PORT,()=>{
    console.clear();
    console.log("Server started at port : "+process.env.HTTP_PORT);
})