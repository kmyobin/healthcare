import React from 'react'
import HeaderDrunk from './Header/HeaderDrunk';
import styles from './Layout.module.css';
import { motion } from 'framer-motion';

function LayoutDrunk(props) {
  return (
    <div className={styles.layout}>
      <HeaderDrunk />
      <main className={styles.main}> {props.children} </main>
    </div>
  )
}

export default LayoutDrunk
