import React from 'react'
import HeaderEat from './Header/HeaderEat';
import styles from './Layout.module.css';

function LayoutEat(props) {
  return (
    <div className={styles.layout}>
      <HeaderEat />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutEat
