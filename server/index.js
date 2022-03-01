import 'dotenv/config';
import express from 'express';
import http from "http";
import {Server} from "socket.io";
import chatRoomHandler from './services/chatRoom.js';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.get("/",(req,res)=>{
    res.send("<h1>AnonLive</h1>");
})


const chatRoom = io.of("/chatroom");
chatRoom.on("connection",chatRoomHandler);


httpServer.listen(process.env.HTTP_PORT,()=>{
    console.clear();
    console.log("Server started at port : "+process.env.HTTP_PORT);
})