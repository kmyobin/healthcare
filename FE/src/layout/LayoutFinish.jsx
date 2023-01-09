import React from 'react'
import styles from './Layout.module.css';
import Header from './Header/Header';

function LayoutFinish(props) {
  return (
    <div className={styles.layout}>
      <Header period="쉬는 시간"
      name={sessionStorage.getItem("name")}
      area="건강 영역"/>
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutFinish
