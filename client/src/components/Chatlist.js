import { useState } from 'react';
import '../css/Chatlist.css';
import Chatroom from './Chatroom';

function Chatlist(){
    const[chatrooms,setChatrooms]=useState([]);

    return(
        <div id="Chatlist">
            <form id="Search">
                <input type="text" placeholder='Search' id="Searchbox"/>
                <span className="material-symbols-outlined" style={{position: 'absolute',top: '10px', fontSize: '16px',color:'gray',left:'15px'}}>search</span>
            </form>
            {chatrooms.length?chatrooms.map((chatroom)=><Chatroom chatroom={chatroom}/>):<p style={{color:'#757575'}}>Currently no chatrooms.</p>}
            
        </div>
    );
}

export default Chatlist;