import { useState,useEffect } from 'react';
import '../css/Chatlist.css';
import Chatroom from './Chatroom';
import { useNavigate } from "react-router-dom";
import Message from './Message';

function Chatlist(){
    const [ chatrooms, setChatrooms ] = useState([]);
    const [ chat, setChat ] = useState(0);
    const [ chatroomName, setChatroomName ] = useState("");
    const [ messages, setMessages ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/user_chatrooms").then((r) => {
          if (r.ok) {
            r.json().then((chatrooms) => setChatrooms(chatrooms));
          }
        });
      }, []);

    useEffect(() => {
        fetch(`/chatrooms/${chat}`).then((r) => {
          if (r.ok) {
            r.json().then((messages) => setMessages(messages));
          }
        });
      }, [chat]);

    
    return(
        <div id="Chatlist">
            <div>
              <div id="ChatlistTop">
                <form id="Search">
                    <input type="text" placeholder='Search' id="Searchbox"/>
                    <span className="material-symbols-outlined" style={{position: 'absolute',top: '10px', fontSize: '16px',color:'gray',left:'15px'}}>search</span>
                </form>
                <button onClick={()=>navigate("/store")} id="storebtn"><span id="storespan" className="material-symbols-outlined">add</span></button>
              </div>
              {chatrooms.length?chatrooms.map((chatroom)=><Chatroom chatroom={chatroom} setChatroomName={setChatroomName} setChat={setChat} key={chatroom.id}/>):<p style={{color:'#757575'}}>Currently no chatrooms.</p>}
            </div>
            <div>
                <p>{chatroomName}</p>  
                {messages.map((message)=><Message message={message} key={message.id}/>)}
            </div>
        </div>
    );
}

export default Chatlist;