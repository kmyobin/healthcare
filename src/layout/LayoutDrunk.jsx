import React from 'react'
import styles from './Layout.module.css';
import { motion } from 'framer-motion';
import Header from './Header/Header';

function LayoutDrunk(props) {
  return (
    <div className={styles.layout}>
      <Header period="5교시" 
      name={sessionStorage.getItem("name")}
      area="금지 영역"
      />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutDrunk
