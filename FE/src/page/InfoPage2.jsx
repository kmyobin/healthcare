import React from 'react'
import InfoConatiner2 from '../containers/info/InfoConatiner2'
import LayoutGrade from '../layout/LayoutGrade'
import { motion } from 'framer-motion'

function InfoPage2() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutGrade>
      <InfoConatiner2 />
    </LayoutGrade>
    </motion.div>
  )
}

export default InfoPage2
