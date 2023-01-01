import React from 'react'
import DrunkContainer from '../containers/QNA/DrunkContainer'
import LayoutDrunk from '../layout/LayoutDrunk' 
import { motion } from 'framer-motion'

function DrunkPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutDrunk>
      <DrunkContainer />
    </LayoutDrunk>
    </motion.div>
  )
}

export default DrunkPage
