import React from 'react';
import styles from '../styles/Home.module.css';

export default function Question() {
  return (
    <div className={styles.question}>
        <li className={styles.authQuestion}>Already have an account?
            <a className={styles.link}>Sign Up</a>
        </li>
            <a className={styles.link}>View Profile</a>
    </div>
  )
}
