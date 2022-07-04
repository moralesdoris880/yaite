import '../css/Home.css';
import Chatlist from "../components/Chatlist";
import { useSelector } from 'react-redux'
import Login from './Login';


function Home(){
    
    const auth = useSelector((state) => state.auth.value)

    if(auth===false)return(
       <Login />
    )
    else
        return(
            <div id="Home">
                <div className="Header"><h1>Yaite</h1></div>
                <div>
                <Chatlist/>
                </div>
            </div>
        );
}

export default Home;