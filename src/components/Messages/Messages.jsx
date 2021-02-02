import React from 'react';
import s from './Messages.module.css';
import Contact from './Contact/Contact';
import MessageItem from './MessageItem/MessageItem';


const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                { props.state.contacts.map( contact => <Contact name={contact.name} id={contact.id} key={contact.id}/> ) }
            </div>
            <div className={s.messages}>
                { props.state.messages.map( message => <MessageItem message={message.message} id={message.id} key={message.id}/> ) }
            </div>
        </div>
    )
}

export default Messages;