import { v4 as uuidv4 } from 'uuid';

const chatRoomHandler = (socket)=>{
    console.log("Connected");
    socket.on("disconnect",()=>{
        console.log("user disconnected!!!!!!!!!!");
        
    })
}
export const newChatRoom = (data)=>{
    try{
        const roomId = uuidv4("roomId");
        const ownerId = uuidv4("ownerId");
        return {
            roomId:roomId,
            ownerId:ownerId,
            roomName:data.name,
            roomDescripton:data.description,
            category:data.category,
            type:data.type
        }
    }
    catch(e){
        return e;
    }
}


export default chatRoomHandler;