import React from 'react'
import InfoContainer1 from '../containers/info/InfoContainer1'
import LayoutGender from '../layout/LayoutGender'
import { motion } from 'framer-motion'
function InfoPage1() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutGender>
      <InfoContainer1 />
    </LayoutGender>
    </motion.div>
  )
}

export default InfoPage1
