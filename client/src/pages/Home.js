import { useState } from 'react';
import '../css/Home.css';
import Chatlist from "../components/Chatlist";

function Home(){
    const[chat,setChat]=useState([])
    return(
        <div id="Home">
            <div className="Header"><h1>Yaite</h1></div>
            <div>
            <Chatlist setChat={setChat}/>
            {/* ON CLICK DISPLAY THE CHATROOM HERE */}
            </div>
        </div>
    );
}

export default Home;