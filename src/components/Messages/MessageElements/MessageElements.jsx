import React from 'react';
import s from './../Messages.module.css';
import MessageItem from '../MessageItem/MessageItem'

import {actionCreateAddMessage, actionCreateDraftMessageUpdate} from './../../../redux/message-reducer'

const MessageElements = (props) => {

    const addMessage = (e) => {
        if (props.draftMessage.message !== '')
            props.dispatch(actionCreateAddMessage())
        e.target.focus()
    }

    const draftMessageChange = (e) => {
        // console.log(props.draftMessage.message)
        let changedMessage = {
            message: e.target.value,
            dialogId: props.dialogId,
            messageAuthor: 1,
            timeStamp: new Date()
        }
        props.dispatch(actionCreateDraftMessageUpdate(changedMessage))
    }

    let messages = props.messages.map((message) => <MessageItem message={message.message}
                                                                messageAuthor={message.messageAuthor}
                                                                key={message.id}/>);
    return (
        <>
            <div className={s.messageField}>
                {messages}
            </div>
            <div className={s.textArea}>
                <textarea placeholder="Enter your message" rows="5" cols="50"
                          onChange={draftMessageChange} value={props.draftMessage.message}/>
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