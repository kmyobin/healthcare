import React from 'react'
import LayoutLife from '../layout/LayoutLife'
import LifeContainer from '../containers/QNA/LifeContainer'
import { motion } from 'framer-motion'

function LifePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutLife>
      <LifeContainer />
    </LayoutLife>
    </motion.div>
  )
}

export default LifePage
