import React from 'react'
import Header from './Header/Header';
import styles from './Layout.module.css';

function LayoutSafe(props) {
  return (
    <div className={styles.layout}>
      <Header period="3교시"
      name={sessionStorage.getItem("name")}
      area="안전 영역" />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutSafe
