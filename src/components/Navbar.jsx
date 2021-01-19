import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
    <nav>
        <div className={s.item}><a href='#s'>Profiles</a></div>
        <div className={s.item}><a href='#s'>Messages</a></div>
        <div className={s.item}><a href='#s'>News</a></div>
        <div className={s.item}><a href='#s'>Music</a></div>
        <div className={s.item}><a href='#s'>Settings</a></div>
    </nav>
    );
}

export default Navbar;