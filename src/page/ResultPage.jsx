import React from 'react'
import ResultContainer from '../containers/result/ResultContainer'
import LayoutHealth from '../layout/LayoutHealth'
import { motion } from 'framer-motion'

function ResultPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutHealth>
      <ResultContainer />
    </LayoutHealth>
    </motion.div>
  )
}

export default ResultPage
