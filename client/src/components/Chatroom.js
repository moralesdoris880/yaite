function Chatroom({chatroom,setChat,setChatroomName}){

    function handleOpenChat(e,chatroom){
        e.preventDefault();
        setChat(chatroom.id)
        setChatroomName(chatroom.name)
    }
    
    return(
        <div className="chatroom">
            <button onClick={(e)=>handleOpenChat(e,chatroom)}>{chatroom.name}</button>
        </div>
    );
}

export default Chatroom;