import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.contacts}>
                <div className={s.contact + ' ' + s.active}>
                    Sasha
                </div>
                <div className={s.contact}>
                    Andrey
                </div>
                <div className={s.contact}>
                    Kostya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messageItem}>
                    Yo
                </div>
                <div className={s.messageItem}>
                    Wusaaup
                </div>
                <div className={s.messageItem}>
                    Fuck you
                </div>
            </div>
        </div>
    )
}

export default Messages;