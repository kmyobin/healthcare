import React from 'react'
import HeaderInternet from './Header/HeaderInternet';
import styles from './Layout.module.css';

function LayoutInternet(props) {
  return (
    <div className={styles.layout}>
      <HeaderInternet />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutInternet
