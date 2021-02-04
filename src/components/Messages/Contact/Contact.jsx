import React from 'react';
import s from './../Messages.module.css';
import { NavLink } from 'react-router-dom';


const Contact = (props) => {
    let path = "/messages/" + props.id;
    console.log(props.profilePicture);
    return (
        <div className={s.contact}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.profilePicture} alt={props.name}/>
                {props.name}
            </NavLink>
        </div>
    )
}


export default Contact;