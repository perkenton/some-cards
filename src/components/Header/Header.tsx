import React from 'react';
import styles from './Header.module.scss';
import { NBS } from '../../common/constants';


export default function Header() {

  return (
    <header className={ styles.header }>
      <nav className={ styles.menu }>
        <a href='/some-cards/' className={ styles.logo }>Some cards</a>
        <p className={ styles.inform }>В проекте используется API от{NBS}<a href='https://www.pexels.com' target='_blank' rel='noreferrer' className={ styles.link }>Pexels</a> с{NBS}хорошей <a
          href='https://www.pexels.com/ru-ru/api/documentation' target='_blank' rel='noreferrer' className={ styles.link }>документацией</a></p>
      </nav>
    </header>
  )
}