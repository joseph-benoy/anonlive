const chatRoomHandler = (socket)=>{
    console.log("Connected");
    socket.on("disconnect",()=>{
        console.log("user disconnected!!!!!!!!!!");
        
    })
}
export default chatRoomHandler;