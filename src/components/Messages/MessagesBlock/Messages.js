import s from "../Messages.module.css";
import React from "react";
import MessagesItem from "./MessagesItem";

const Messages = (props) => {
    // if (props.messages[0])
    //     props.changeDraftMessageDialogId(props.messages[0].dialogId)
    let messagesItems = props.messages.map(
        message => <MessagesItem message={message.message}
                                 messageAuthor={message.messageAuthor}
                                 key={message.id}/>
    )

    const addMessage = () => {
        props.addNewMessage()
        document.getElementById('messageTextArea').focus()
    }

    const draftMessageChange = (e) => {
        let changedMessage = {
            message: e.target.value,
            dialogId: props.dialogId
        }
        props.draftMessageUpdate(changedMessage)
    }

    return (
        <>
            <div className={s.messages}>
                {messagesItems}
            </div>
            <div className={s.textArea}>
                <div>
                    <textarea id="messageTextArea" placeholder="Enter your message" rows="5" cols="50"
                          onChange={draftMessageChange} value={props.draftMessage}/>
                </div>
                <div>
                    <button
                        onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}

export default Messages