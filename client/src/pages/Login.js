function Login(){
    return(
        <div>
            <form>
                <input type="text" placeholder="Username" ></input>
                <input type="text" placeholder="Password" ></input>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}

export default Login;

// onChange={(e) => setPassword(e.target.value)}