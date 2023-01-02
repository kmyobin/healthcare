import React from 'react'
import LayoutSafe from '../layout/LayoutSafe'
import QNAConatiner from '../containers/QNA/QNAContainer'
import contents from "../questionBox/questionBoxSafe"
import { motion } from 'framer-motion'

function SafePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{delay: 0.5}}
  >
    <LayoutSafe>
      <QNAConatiner next="/internet" questionNum={contents.length} contents={contents} />
    </LayoutSafe>
    </motion.div>
  )
}

export default SafePage
