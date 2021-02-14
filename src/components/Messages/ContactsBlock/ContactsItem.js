import React from 'react'
import s from '../Messages.module.css'
import { NavLink } from 'react-router-dom'

// id
// profilePicture
// name

const ContactsItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.contact}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.profilePicture} alt={props.name}/>
                {props.name}
            </NavLink>
        </div>
    )
}


export default ContactsItem;