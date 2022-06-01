import '../css/Login.css'

function Login(){
    return(
        <div id="Login">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="loginform">
                <h1>Login</h1>
                <p>Don't have an account? <a href='/signup'>Sign up</a> for free.</p>
                <input type="text" placeholder="Username" ></input>
                <input type="text" placeholder="Password" ></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}

export default Login;

// onChange={(e) => setPassword(e.target.value)}