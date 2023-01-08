import React from "react";
import LayoutEat from "../layout/LayoutEat";
import contents from "../questionBox/questionBoxEat";
import { motion } from "framer-motion";
import QNAConatiner from "../containers/QNA/QNAContainer";

function EatPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <LayoutEat>
        <QNAConatiner
          next="/life"
          questionNum={contents.length}
          contents={contents}
          period="eat"
          time={1}
        />
      </LayoutEat>
    </motion.div>
  );
}

export default EatPage;
