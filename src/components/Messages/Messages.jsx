import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import MessageItem from './MessageItem/MessageItem';
import { BrowserRouter, Route } from 'react-router-dom';
import MessageElements from './MessageElements/MessageElements';


const Messages = (props) => {

    // let messageElements = props.state.messages.map(message => <MessageItem
    //     message={message.message}
    //     id={message.id}
    //     key={message.id}
    //     timeStamp={message.timeStamp}
    //     messageSender={message.messageSender}
    //     messageReceiver={message.messageReceiver}
    // />)
    let contactElements = props.state.contacts.map(contact => <Contact
        name={contact.name}
        id={contact.id}
        key={contact.id}
        profilePicture={contact.profilePicture} />)

    let contactsAmount = props.state.contacts.length;

    let messagesByDialog = []

    for (let i = 1; i <= contactsAmount; i++) {
        let messages = props.state.messages.filter((message) => message.dialogId === i);
        messagesByDialog.push({
            id: i,
            messages: messages
        })
    }

    let possibleRoutes = messagesByDialog.map(
        (dialog) => {
            return (
                <Route
                    path={'/messages/' + dialog.id}
                    render={() => (
                        <MessageElements
                            messages={dialog.messages}
                            dispatch={props.dispatch}
                            dialogId={dialog.id}
                            draftMessage={props.state.draftMessage}
                        />
                    )}
                    key={dialog.id} 
                />
            )
        }
    )

    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                {contactElements}
            </div>
            <div className={s.messages}>
                {possibleRoutes}
            </div>
        </div>
    )
}

export default Messages;