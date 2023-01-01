import React from 'react'
import InternetContainer from '../containers/QNA/InternetContainer'
import LayoutInternet from '../layout/LayoutInternet'
import { motion } from 'framer-motion'

function InternetPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutInternet>
      <InternetContainer />
    </LayoutInternet>
    </motion.div>
  )
}

export default InternetPage
