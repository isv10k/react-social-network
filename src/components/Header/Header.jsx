import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.img} src="./../logo192.png" alt='logo' />
    </header>
  );
}

export default Header;