import React from 'react'
import HomeContainer from '../containers/home/HomeContainer'
import LayoutHealth from '../layout/LayoutHealth'
import { motion } from 'framer-motion'
function HomePage() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{delay: 0.5}}      
    >
      <LayoutHealth>
        <HomeContainer />
      </LayoutHealth>      
    </motion.div>

  )
}

export default HomePage
