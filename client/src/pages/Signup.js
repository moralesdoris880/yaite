import '../css/Signup.css'

function Signup(){
    return(
        <div id="Signup">
            <div className="Header"><h1>Yaite</h1></div>
            <form id="signupform">
                <h1 className='heading'>Sign Up</h1>
                <p className='text' style={{textAlign:'center'}}>Already have an account? <a href='/login'>Login</a></p>
                <input type="text" placeholder="Username" className='inputs' ></input>
                <input type="text" placeholder="Password" className='inputs' ></input>
                <input type="text" placeholder="Re-Enter Password" className='inputs' ></input>
                <input type="submit" value="Sign Up" className='submit'></input>
            </form>
        </div>
    );
}

export default Signup;


// onChange={(e) => setPassword(e.target.value)}