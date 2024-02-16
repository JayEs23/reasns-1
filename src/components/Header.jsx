import React from 'react';
import Nav from './Nav';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
   <>
    <Nav />
    <header>
        <div className={styles.header}>
            <img className={styles.logo} src='/logo.png' />
            <h2>Reasns</h2>
        </div>
    </header>
   </>
  )
}

