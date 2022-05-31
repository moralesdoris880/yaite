import Navbar from "../components/Navbar";
import '../css/Home.css';
import Chatlist from "../components/Chatlist";

function Home(){
    return(
        <div id="Home">
            <Navbar/>
            {/* CHECK IF USER IS LOGGED IN , IF NOT DISPLAY LOGIN/SIGNUP form  */}
            <Chatlist/>
            <div>CHATROOM MSGS DISPLAY</div>
        </div>
    );
}

export default Home;