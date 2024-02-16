import React from 'react';
import styles from '../styles/Home.module.css';

export default function Nav() {
  return (
    <nav>
        <ul className={styles.navbar}>
            <li><a href=""></a></li>
            <div className={styles.mainNav}>
                <li><a href="">Home</a></li>
                <li><a href="">Profiles</a></li>
                <li><a href="">Log in/Sign up</a></li>
            </div>
            <li><a className={styles.link} href="">Save & Continue</a></li>
        </ul>
    </nav>
  )
}
