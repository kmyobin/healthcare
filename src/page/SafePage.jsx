import React from 'react'
import LayoutSafe from '../layout/LayoutSafe'
import SafeContainer from '../containers/QNA/SafeContainer'
import { motion } from 'framer-motion'

function SafePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutSafe>
      <SafeContainer />
    </LayoutSafe>
    </motion.div>
  )
}

export default SafePage
