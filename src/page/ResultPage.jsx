import React from "react";
import ResultContainer from "../containers/result/ResultContainer";
import { motion } from "framer-motion";
import LayoutResult from "../layout/LayoutResult";

function ResultPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      <LayoutResult>
        <ResultContainer />
      </LayoutResult>
    </motion.div>
  );
}

export default ResultPage;
