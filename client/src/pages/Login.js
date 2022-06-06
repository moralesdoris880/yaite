import '../css/Login.css'

function Login(){

    // function handleLogin(e){ PASS THRU REDUX
    //     e.preventDefault();
    //     fetch("/login", { 
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           username,
    //           password
    //         }),
    //       }).then((r) => {
    //         if (r.ok) {
    //           r.json().then((user) => handleLoginSuccess(user));
    //         } else {
    //           r.json().then(() => console.log("Try again bub :<"));
    //         }
    //       });
    // }

    return(
        <div id="Login">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="loginform">
                <h1 className='heading'>Log In</h1>
                <p className='text' style={{textAlign:'center'}}>Don't have an account? <a href='/signup'>Sign up</a> for free.</p>
                <input type="text" placeholder="Username" className='inputs' ></input>
                <input type="text" placeholder="Password" className='inputs'></input>
                <input type="submit" value="Log In" className='submit'></input>
            </form>
        </div>
    );
}

export default Login;

// onChange={(e) => setPassword(e.target.value)}