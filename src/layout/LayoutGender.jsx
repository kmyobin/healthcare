import React from 'react'
import Header from './Header/Header';
import styles from './Layout.module.css';

function LayoutGender(props) {
  return (
    <div className={styles.layout}>
      <Header period="0교시"
      name={sessionStorage.getItem("name")}
      area="성별 영역" />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutGender
