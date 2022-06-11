import '../css/Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[displayPassword,setDisplayPassword]=useState(true);
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        fetch("/login", { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) =>  navigate("/"));
            } else {
              r.json().then(() => console.log("Try again bub :<"));
            }
          });
    }

    function handleDisplayPassword(e){
      e.preventDefault();
      setDisplayPassword(!displayPassword)
    }

    return(
        <div id="Login">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="loginform" onSubmit={handleLogin}>
                <h1 className='heading'>Log In</h1>
                <p className='text' style={{textAlign:'center'}}>Don't have an account? <a href='/signup'>Sign up</a> for free.</p>
                <input type="text" placeholder="Username" className='inputs' onChange={(e) => setUsername(e.target.value)}></input>
                <input type={displayPassword? "text":"password"} placeholder="Password" className='inputs' onChange={(e) => setPassword(e.target.value)}></input>
                <input type="checkbox" onClick={(e) => handleDisplayPassword(e)}/>Show Password
                <input type="submit" value="Log In" className='submit'></input>
            </form>
        </div>
    );
}

export default Login;

// onChange={(e) => setPassword(e.target.value)}