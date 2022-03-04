import 'dotenv/config';
import express from 'express';
import http from "http";
import {Server} from "socket.io";
import router from './routes/APIv1/index.js';
import chatRoomHandler from './services/chatRoom.js';
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("<h1>AnonLive</h1>");
})

app.use("/api",router);

const chatRoom = io.of("/chatroom");
chatRoom.on("connection",chatRoomHandler);

app.use((err,req,res,next)=>{
    res.status(error.status).json(err);
})




httpServer.listen(process.env.HTTP_PORT,()=>{
    console.clear();
    console.log("Server started at port : "+process.env.HTTP_PORT);
})