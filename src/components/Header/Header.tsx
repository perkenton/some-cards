import React from 'react';
import styles from './Header.module.scss';


export default function Header() {

  return (
    <header className={ styles.header }>
      <nav className={ styles.menu }>
        <p className={ styles.logo }>Some cards</p>
        <p className={ styles.inform }>Lorem ipsum dolor sit amet.</p>
      </nav>
    </header>
  )
}