import React from 'react'
import HeaderSafe from './Header/HeaderSafe';
import styles from './Layout.module.css';

function LayoutSafe(props) {
  return (
    <div className={styles.layout}>
      <HeaderSafe />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutSafe
