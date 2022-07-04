function Message({message}){
    return(
        <div>
            <p>{message.body}</p>
            <p>{message.user.username}</p>
        </div>
    );
}

export default Message;