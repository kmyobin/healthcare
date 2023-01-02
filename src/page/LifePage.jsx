import React from 'react'
import LayoutLife from '../layout/LayoutLife'
import contents from "../questionBox/questionBoxLife"
import { motion } from 'framer-motion'
import QNAConatiner from '../containers/QNA/QNAContainer'

function LifePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{delay: 0.5}}
  >
    <LayoutLife>
      <QNAConatiner next="/safe" questionNum={contents.length} contents={contents}/>
    </LayoutLife>
    </motion.div>
  )
}

export default LifePage
