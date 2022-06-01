function Chatroom({chatroom,setChat}){
    return(
        <div className="chatroom">
            <button onClick={(chatroom)=>setChat(chatroom)}>
                {/* TITLE HERE 
                RANDOM IMAGE HERE */}
            </button>
        </div>
    );
}

export default Chatroom;