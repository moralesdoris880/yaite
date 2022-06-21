import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css';

function Navbar(){
    const[burgerNav,setBurgerNav]= useState(true)
    const navigate = useNavigate();

    // function handleLogout(){
    //     fetch("/logout", { method: "DELETE" }).then((r) => { 
    //         if (r.ok) {
    //           setUser(null); PASS THRU REDUX
    //         }
    //       });
    // }

    return(
        <div id="Navbar">
            <span className="material-symbols-outlined" onClick={()=>setBurgerNav(!burgerNav)} style={{ fontSize:'32px'}}>{burgerNav?'menu':'close'}</span>
            {burgerNav? console.log('random dancing...'):
            <ul id="Nav">
                <button onClick={()=>navigate("/")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>home</span></button>
                <button onClick={()=>navigate("/about")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>info</span></button>
                <button onClick={()=>navigate("/settings")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>settings</span></button>
                <span className="material-symbols-outlined" style={{ fontSize:'24px'}}>exit_to_app</span>
            </ul>}
        </div>
    );
}

export default Navbar;



// 