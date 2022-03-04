import { newChatRoom } from "../services/chatRoom.js"
import { error } from "../utils/functions.js";

export const newRoom = (req,res,next)=>{
    try{
        const data = req.body;
        const result = newChatRoom(data);
        return res.json(result);
    }
    catch(e){
        next(error(409,"couldn't create chatroom"))
    }   
}