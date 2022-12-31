import React from 'react'
import HeaderLife from './Header/HeaderLife';
import styles from './Layout.module.css';

function LayoutLife(props) {
  return (
    <div className={styles.layout}>
      <HeaderLife />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutLife
