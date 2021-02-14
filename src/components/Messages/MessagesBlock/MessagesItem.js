import React from 'react';
import s from '../Messages.module.css';

// messageAuthor
// message

const MessagesItem = (props) => {
    if (props.messageAuthor !== 1) {
        return (
            <div className={s.messageItem}>
                {props.message}
            </div>
        )
    } else {
        return (
            <div className={`${s.messageItem} ${s.yourMessage}`}>
                {props.message}
            </div>
        )
    }

}

export default MessagesItem;