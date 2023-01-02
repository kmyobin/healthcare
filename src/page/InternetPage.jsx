import React from 'react'
import contents from "../questionBox/questionBoxInternet"
import LayoutInternet from '../layout/LayoutInternet'
import { motion } from 'framer-motion'
import QNAConatiner from '../containers/QNA/QNAContainer'

function InternetPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
  >
    <LayoutInternet>
      <QNAConatiner next="/drunk" questionNum={contents.length} contents={contents} />
    </LayoutInternet>
    </motion.div>
  )
}

export default InternetPage
