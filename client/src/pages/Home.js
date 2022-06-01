import { useState } from 'react';
import '../css/Home.css';
import Chatlist from "../components/Chatlist";

function Home(){
    const[chat,setChat]=useState([])
    return(
        <div id="Home">
            {/* CHECK IF USER IS LOGGED IN , IF NOT DISPLAY LOGIN/SIGNUP form  */}
            <Chatlist setChat={setChat}/>
            {/* ON CLICK DISPLAY THE CHATROOM HERE */}
        </div>
    );
}

export default Home;