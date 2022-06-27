function ChatroomInStore({chatroom}){
    return(
        <div>
            <p>{chatroom.name}</p>
            <p>Currently 1 User</p>
            <button>Join</button>
            <button disabled>Joined</button>
        </div>
    );
}

export default ChatroomInStore;


{/* IMPLEMENT: ADD A CATEGORY TO THIS CHATROOM */}
            {/* <p>PUT HOW MANY USERS ARE IN THIS CHATROOM</p> */}
// .no-click {pointer-events: none;}

// <input class="no-click" /> ON CLICK BUTTON WILL NOT ALLOW TO BE CLICKED AGAIN