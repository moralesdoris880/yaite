import { useState,useEffect } from 'react';
import ChatroomInStore from '../components/ChatroomInStore';
import '../css/ChatroomStore.css';

function ChatroomStore(){
    const[ query,setQuery ] = useState("");
    const[ name,setName ] = useState("");
    const[ newChatroomSucess,setNewChatroomSucess ] = useState(false);
    const[ chatrooms,setChatrooms ] = useState([]);


    useEffect(() => {
        fetch("/chatrooms").then((r) => {
          if (r.ok) {
            r.json().then((chatrooms) => setChatrooms(chatrooms));
          }
        });
      }, [newChatroomSucess]);


    function handleNewChatroom(e,name){
        e.preventDefault();
        fetch("/chatrooms", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name 
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((chatroom) => handleNewChatroomSuccess(chatroom));
            } else {
              r.json().then(() => console.log("Chatroom Name Taken :<"));
            }
          });
    }

    function handleNewChatroomSuccess(chatroom){
        console.log('chatroom was made!')
        setNewChatroomSucess(!newChatroomSucess)
    }

    return(
        <div id="Store">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="Search">
                <input type="text" placeholder='Search' id="Searchbox"/>
                <span className="material-symbols-outlined" style={{position: 'absolute',top: '10px', fontSize: '16px',color:'gray',left:'15px'}}>search</span>
            </form>
            <div id="CreateChatroomBox">
            <h1 className="Createtitle">Create a Chatroom</h1>
            <form id="Create" onSubmit={(e)=>handleNewChatroom(e,name)}>
                <input type="text" placeholder='Chatroom Name' id="CreateNameInput" onChange={(e)=>setName(e.target.value)}/>
                <input type="submit" value="Create" id="CreateSubmit"/>
            </form>
            </div>
            <div id="ChatroomList">
              <h1 className="Createtitle">Chatrooms</h1>
            { chatrooms.map((chatroom)=><ChatroomInStore chatroom={chatroom} key={chatroom.id}/>)}
            </div>
        </div>
    );
}

export default ChatroomStore;