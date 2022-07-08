import '../css/Message.css';
import { useSelector } from 'react-redux';

function Message({message}){
    const user = useSelector((state) => console.log(state))

    console.log(user)

    // if(message.user.id === )
    return(
        <div className="messageBubble">
            <p className='user'>{message.user.username}</p>
            <p>{message.body}</p> 
        </div>
    );
}

export default Message; 