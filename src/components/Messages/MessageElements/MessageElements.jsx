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

    let messages = props.messages.map( (message) => <MessageItem message={message.message} messageAuthor={message.messageAuthor} key={message.id}/> );
    return (
        <div className={s.messageField}>
            {messages}
        </div>
    )

}

export default MessageElements;