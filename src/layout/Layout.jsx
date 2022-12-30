import React from 'react'
import HeaderHealth from './Header/HeaderHealth';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div className={styles.layout}>
      <HeaderHealth />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default Layout
