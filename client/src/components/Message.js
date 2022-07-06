import '../css/Message.css';

function Message({message}){
    return(
        <div className="messageBubble">
            <p className='user'>{message.user.username}</p>
            <p>{message.body}</p> 
        </div>
    );
}

export default Message;