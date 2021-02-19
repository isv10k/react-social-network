import React from 'react'
import s from '../Messages.module.css'
import {NavLink, useLocation} from 'react-router-dom'

// id
// profilePicture
// name

const ContactsItem = (props) => {
    let path = "/messages/" + props.id;
    let activeCheck = useLocation().pathname === path
    return (

            <NavLink className={activeCheck ? s.contactLinkActive : s.contactLink} to={path}>
                <div className={s.contact}>
                    <img className={s.contactImg} src={props.profilePicture} alt={props.name}/>
                    <span className={s.contactName}>{props.name}</span>
                </div>
            </NavLink>

    )
}


export default ContactsItem;