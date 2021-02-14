import React from 'react'
import s from '../Messages.module.css'
import ContactsItem from "./ContactsItem";

const Contacts = (props) => {
    let contactElements = props.contacts.map(
        contact => {
            return (
                <ContactsItem
                    name={contact.name}
                    id={contact.id}
                    key={contact.id}
                    profilePicture={contact.profilePicture}
                />
            )
        }
    )
    return (
        <div className={s.contacts}>
            {contactElements}
        </div>
    )

}

export default Contacts