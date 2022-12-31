import React from 'react'
import HeaderGender from './Header/HeaderGender';
import styles from './Layout.module.css';

function LayoutGender(props) {
  return (
    <div className={styles.layout}>
      <HeaderGender />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutGender
