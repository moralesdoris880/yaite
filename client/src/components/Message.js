import '../css/Message.css';
import { useSelector } from 'react-redux';

function Message({message}){
    const user = useSelector((state) => state.user.value[0].id)

    return(
        <div className={message.user.id === user?"messageBubble":"messageBubbleOther"}>
            <p className='user'>{message.user.username}</p>
            <p>{message.body}</p> 
        </div>
    );
}

export default Message; 