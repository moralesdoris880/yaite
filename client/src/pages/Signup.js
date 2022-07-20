import '../css/Signup.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/reducers/authSlice';
import { account } from '../features/reducers/userSlice';

function Signup(){
    const[password,setPassword]=useState("");
    const[passwordConfirmation,setPasswordConfirmation]=useState("");
    const[username,setUsername]=useState("");
    const[displayPassword,setDisplayPassword]=useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSignup(e){ 
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              password_confirmation: passwordConfirmation
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => handleSignupSuccess(user));
            } else {
              r.json().then(() => console.log("Not created :<"));
            }
          });
    }

    function handleSignupSuccess(user){
      dispatch(login());
      dispatch(account(user));
      navigate("/");
    }

    function handleDisplayPassword(e){
      e.preventDefault();
      setDisplayPassword(!displayPassword)
    }

    return(
        <div id="Signup">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="signupform" onSubmit={handleSignup}>
                <h1 className='heading'>Sign Up</h1>
                <p className='text' style={{textAlign:'center'}}>Already have an account? <a href='/login'>Login</a></p>
                <input type="text" placeholder="Username" className='inputs' onChange={(e) => setUsername(e.target.value)} required></input>
                <input type={displayPassword? "text":"password"} placeholder="Password" className='inputs' onChange={(e) => setPassword(e.target.value)} required></input>
                <input type={displayPassword? "text":"password"} placeholder="Re-Enter Password" className='inputs' onChange={(e) => setPasswordConfirmation(e.target.value)} required></input>
                <input type="checkbox" onClick={(e) => handleDisplayPassword(e)}/>Show Password
                <input type="submit" value="Sign Up" className='submit'></input>
            </form>
        </div>
    );
}

export default Signup;


// 