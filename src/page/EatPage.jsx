import React from 'react'
import LayoutEat from '../layout/LayoutEat'
import EatContainer from '../containers/QNA/EatContainer'
import { motion } from 'framer-motion'

function EatPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutEat>
      <EatContainer />
    </LayoutEat>
  /</motion.div>
  )
}

export default EatPage
