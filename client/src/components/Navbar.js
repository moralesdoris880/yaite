import { useState } from 'react';
import '../css/Navbar.css';

function Navbar(){
    const[burgerNav,setBurgerNav]= useState(true)
    return(
        <div id="Navbar">
            <span className="material-symbols-outlined" onClick={()=>setBurgerNav(!burgerNav)} style={{ fontSize:'32px'}}>{burgerNav?'menu':'close'}</span>
            {burgerNav? console.log('random dancing...'):
            <ul id="Nav">
                <span className="material-symbols-outlined" style={{ fontSize:'24px'}}>info</span>
                <span className="material-symbols-outlined" style={{ fontSize:'24px'}}>settings</span>
                <span className="material-symbols-outlined" style={{ fontSize:'24px'}}>exit_to_app</span>
            </ul>}
        </div>
    );
}

export default Navbar;



// 