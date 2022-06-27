import { useState } from 'react';
import '../css/Chatlist.css';
import Chatroom from './Chatroom';
import { useNavigate } from "react-router-dom";

function Chatlist({setChat}){
    const[chatrooms,setChatrooms]=useState([]);
    const navigate = useNavigate();
    
    return(
        <div id="Chatlist">
            <div>
                <form id="Search">
                    <input type="text" placeholder='Search' id="Searchbox"/>
                    <span className="material-symbols-outlined" style={{position: 'absolute',top: '10px', fontSize: '16px',color:'gray',left:'15px'}}>search</span>
                </form>
                <button onClick={()=>navigate("/store")} ><span class="material-symbols-outlined">add</span></button>
                {chatrooms.length?chatrooms.map((chatroom)=><Chatroom chatroom={chatroom} setChat={setChat}/>):<p style={{color:'#757575'}}>Currently no chatrooms.</p>}
            </div>
            <div>
                <p>Display</p>
                
            </div>
        </div>
    );
}

export default Chatlist;