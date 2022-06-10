import { useState } from 'react';
import '../css/Home.css';
import Chatlist from "../components/Chatlist";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { auth } from '../features/reducers/authSlice';
import Login from './Login';


function Home(){
    const[chat,setChat]=useState([])
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.value)

    if(auth===false)return(
       <Login />
    )
    else
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