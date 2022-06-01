import '../css/About.css'
import linkedinlogo from "../media/Linkedin.png";
import githublogo from "../media/Github.png";
import gmaillogo from "../media/Gmail.png";
import people from "../media/People.jpg";

function About(){
    return(
        <div id="About">
            <div className="Header"><h1>Yaite</h1></div>
            <div style={{display:'flex'}}>
                <div id="aboutmain">
                    <h1 className='Heading' style={{padding: '10px 0px 10px 15px', fontSize: '36px'}}>About Yaite</h1>
                    <img src={people} alt="people talking, credits to Brooke Cagle" id="people"></img>
                    <div className='box' style={{width: '50%',margin:0}}>
                        <h1 className='Heading'>Our Leadership</h1>
                        <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/275614533_379443737334355_186047330017330400_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D2Yt1XlulnEAX8aVIPh&_nc_ht=scontent-lga3-1.xx&oh=00_AT-9JFld7xyGbNIdk3dSAEapj5CeqkoACQzrXZ-ySFNpcQ&oe=629B9B55" id="pfp"></img>
                        <p className='text'>Doris Morales</p>
                        <p className='text'>Founder</p>
                        <div className='box'>
                        <a href='https://www.linkedin.com/in/dorisvmorales/'><img src={linkedinlogo} alt="Linkedin Logo" className='logo'></img></a>
                        <a href='https://github.com/moralesdoris880'><img src={githublogo} alt="Github Logo" className='logo'></img></a>
                        <a href='mailto:moralesdoris67@gmail.com'><img src={gmaillogo} alt="Gmail Logo" className='logo'></img></a>
                        </div>
                    </div>
                </div>
                <div id="aboutinfo">
                    <div className='box' style={{padding: '40px 0px 0px 0px'}}>
                        <h1 className='Heading'>Our Mission</h1>
                        <p className='text'>Give people a voice and safe space to talk about anything.</p>
                    </div>
                    <div className='box'>
                        <h1 className='Heading'>Our Culture</h1>
                        <p className='text'>At Yaite, we are working on improving and solving problems so everyone can be connected and creating online communities.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;
