import '../css/Chatroom.css';

function Chatroom({chatroom,setChat,setChatroomName}){

    function handleOpenChat(e,chatroom){
        e.preventDefault();
        setChat(chatroom.id)
        setChatroomName(chatroom.name)
    }
    
    return(
        <div className="chatroom">
            <button onClick={(e)=>handleOpenChat(e,chatroom)} className="chatroombtn">{chatroom.name}</button>
        </div>
    );
}

export default Chatroom;