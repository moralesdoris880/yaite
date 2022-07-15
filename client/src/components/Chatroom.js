import '../css/Chatroom.css';
import { useState } from 'react';

function Chatroom({chatroom,setChat,setChatroomName}){
    const[ url,setUrl ] = useState(chatroom.image.url);
    const[ alt,setAlt ] = useState(chatroom.image.alt);
    

    function handleOpenChat(e,chatroom){
        e.preventDefault();
        setChat(chatroom.id)
        setChatroomName(chatroom.name)
    }
    
    return(
        <div className="chatroom">
            <button onClick={(e)=>handleOpenChat(e,chatroom)} className="chatroombtn"><img src={url} alt={alt} className="logoimg"/><p className="chatroomtitle">{chatroom.name}</p></button>
        </div>
    );
}

export default Chatroom;