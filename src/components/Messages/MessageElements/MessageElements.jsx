import React from 'react';
import s from './../Messages.module.css';
import MessageItem from '../MessageItem/MessageItem'



const MessageElements = (props) => {

    // let messageElements = props.map(message => <MessageItem
    //     message={message.message}
    //     id={message.id}
    //     key={message.id}
    //     timeStamp={message.timeStamp}
    //     dialogId={message.dialogId}
    //     messageAuthor={message.messageAuthor}
    // />)

    let newMessage = React.createRef();

   


    function addMessage() {
        if (props.store.getDraftMessage().message !== '')
            
            props.store.addMessage()
            debugger;
        newMessage.current.focus()
    }

    function draftMessageChange() {
        // console.log(props.draftMessage.message)
        props.store.draftMessageUpdate({
            message: newMessage.current.value,
            dialogId: props.dialogId,
            messageAuthor: 1,
            timeStamp: new Date()
        })
    }
    
    
    let messages = props.messages.map((message) => <MessageItem message={message.message} messageAuthor={message.messageAuthor} key={message.id} />);
    return (
        <>
            <div className={s.messageField}>
                {messages}
            </div>
            <div className={s.textArea}>
                <textarea ref={newMessage} placeholder="Enter your message" rows="5" cols="50" onChange={draftMessageChange} value={props.store.getDraftMessage().message}/>
            </div>
            <div>
                <button 
                onClick={addMessage}>
                    Send
                </button>
            </div>
        </>
    )

}

export default MessageElements;