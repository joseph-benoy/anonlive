import "./chatSettings.scss";
import React, { useEffect } from "react";
import Header from "../../components/header";
import { io } from "socket.io-client";

const ChatSettings:React.FC = ():JSX.Element=>{
    useEffect(()=>{
        var chatRoomSocket = io("/chatroom");
    },[])
    return(
        <>
            <Header/>
        </>
    );
}

export default ChatSettings;