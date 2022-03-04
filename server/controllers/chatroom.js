import { newChatRoom } from "../services/chatRoom.js"

export const newRoom = (req,res)=>{
    const data = req.body;
    console.log(data)
    const result = newChatRoom(data);
    return res.json(result);
}