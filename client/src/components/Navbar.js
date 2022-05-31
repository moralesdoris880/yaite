import { useState } from 'react';

function Navbar(){
    const[burgerNav,setBurgerNav]= useState(true)
    return(
        <div>
            <span className="material-symbols-outlined" onClick={()=>setBurgerNav(!burgerNav)}>{burgerNav?'menu':'close'}</span>
            {burgerNav?<ul>
                <span class="material-symbols-outlined">home</span>
                <span class="material-symbols-outlined">info</span>
                <span class="material-symbols-outlined">settings</span>
                <span class="material-symbols-outlined">exit_to_app</span>
            </ul>:console.log('random dancing...')}
        </div>
    );
}

export default Navbar;