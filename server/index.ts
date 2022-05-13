import 'dotenv/config';
import http from "http";
import { v4 as uuidv4 } from 'uuid';
import { redis } from './utils/redis';
import express,{ Request,Response } from 'express';

const app = express();
const server = http.createServer(app);
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send("Hello!");
})

app.post("/api/new",(req:Request,res:Response)=>{
    const {roomName,userName}  = req.body;
    const roomId = uuidv4();
    redis.set(roomId,roomName);
    res.json({
        roomId,
        roomName,
        userName
    })
})

server.listen(5000 || process.env.PORT,()=>{
    console.clear();
    console.log("Server started");
})