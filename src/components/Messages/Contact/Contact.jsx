import React from 'react';
import s from './../Messages.module.css';
import { NavLink } from 'react-router-dom';


const Contact = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.contact}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


export default Contact;