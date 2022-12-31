import React from 'react'
import HeaderGrade from './Header/HeaderGrade';
import styles from './Layout.module.css';

function LayoutGrade(props) {
  return (
    <div className={styles.layout}>
      <HeaderGrade />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutGrade
