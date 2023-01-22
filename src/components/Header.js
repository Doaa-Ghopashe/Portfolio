import React from 'react'
import styles from '../componentsstyle/header.module.css';

export default function Header(props) {
  
  return (
    <header>
      <div className={styles.headercontent}>
        {props.children}
      </div>
    </header>
  )
}
