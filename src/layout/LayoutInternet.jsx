import React from 'react'
import Header from './Header/Header';
import styles from './Layout.module.css';

function LayoutInternet(props) {
  return (
    <div className={styles.layout}>
      <Header period="4교시"
      name={sessionStorage.getItem("name")}
      area="인터넷 영역" />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutInternet
