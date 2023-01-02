import React from 'react'
import LayoutDrunk from '../layout/LayoutDrunk' 
import { motion } from 'framer-motion'
import QNAConatiner from '../containers/QNA/QNAContainer'
import contents from "../questionBox/questionBoxDrunk"

function DrunkPage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <LayoutDrunk>
        <QNAConatiner next="/finish" questionNum={contents.length} contents={contents}/>
      </LayoutDrunk>
    </motion.div>
  )
}

export default DrunkPage
