import React from 'react'
import LayoutFinish from '../layout/LayoutFinish'
import { motion } from 'framer-motion'
import FinishContainer from '../containers/finish/FinishContainer'

function FinishPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{delay: 0.5}}
  >
    <LayoutFinish>
      <FinishContainer next="/result"/>
    </LayoutFinish>
    </motion.div>
  )
}

export default FinishPage
