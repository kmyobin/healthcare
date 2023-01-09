import React from 'react'
import styles from './Layout.module.css';
import Header from './Header/Header';

function LayoutEat(props) {
  return (
    <div className={styles.layout}>
      <Header period="1교시"
      name={sessionStorage.getItem("name")}
      area="식습관 영역"/>
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutEat
