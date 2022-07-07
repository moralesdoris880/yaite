import { useState } from 'react';
import '../css/ChatroomInStore.css';

function ChatroomInStore({chatroom}){
    const[ display,setDisplay ] = useState(false);
    const[ message,setMessage ] = useState("A user has joined the chatroom");

    function handleJoin(e){
      e.preventDefault();
        fetch("/messages", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "chatroom_id":chatroom.id,
              "body":message,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => setDisplay(true));
            } else {
              r.json().then(() => console.log("Message could not be sent"));
            }
          });
    }

    return(
        <div className='chatroomInStoreBox'>
            <div>
              <p>{chatroom.name}</p>
              <p>Currently 1 User</p> 
            </div>
            <div className='chatroomJoinBtn'>
            {display?<button disabled className='chatroomJoinBtn'>Joined</button> : <button onClick={(e)=>handleJoin(e)} className='chatroomJoinBtn'>Join</button>} 
            </div>
        </div>
    );
}

export default ChatroomInStore;


{/* IMPLEMENT: ADD A CATEGORY TO THIS CHATROOM */}
            {/* <p>PUT HOW MANY USERS ARE IN THIS CHATROOM</p> */}
// .no-click {pointer-events: none;}

// <input class="no-click" /> ON CLICK BUTTON WILL NOT ALLOW TO BE CLICKED AGAIN