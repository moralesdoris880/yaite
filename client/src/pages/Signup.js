function Signup(){
    return(
        <div>
            <form>
                <input type="text" placeholder="Username" ></input>
                <input type="text" placeholder="Password" ></input>
                <input type="text" placeholder="Re-Enter Password" ></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    );
}

export default Signup;


// onChange={(e) => setPassword(e.target.value)}