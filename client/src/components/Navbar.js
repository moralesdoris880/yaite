import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/reducers/authSlice';

function Navbar(){
    const[burgerNav,setBurgerNav]= useState(true)
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch();


    function handleLogout(e){
        e.preventDefault();
        fetch("/logout", { method: "DELETE" }).then((r) => { 
            if (r.ok) {
             dispatch(logout());
            }
        });
    }

    return(
        <div id="Navbar">
            <span className="material-symbols-outlined" onClick={()=>setBurgerNav(!burgerNav)} style={{ fontSize:'32px'}}>{burgerNav?'menu':'close'}</span>
            {burgerNav? console.log('random dancing...'):
            <ul id="Nav">
                <button onClick={()=>navigate("/")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>home</span></button>
                <button onClick={()=>navigate("/about")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>info</span></button>
                <button onClick={()=>navigate("/settings")} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>settings</span></button>
            </ul>}
            {auth?<button onClick={(e)=>handleLogout(e)} className="navtab"><span className="material-symbols-outlined" style={{ fontSize:'24px'}}>exit_to_app</span></button>:console.log('not logged in')}
        </div>
    );
}

export default Navbar;



// 