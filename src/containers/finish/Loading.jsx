import React from "react";
import { motion } from "framer-motion";
import "./Loading.module.css";

function Loading() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <motion.div
        className="box"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 3, times: [0, 0.2, 1], repeat: Infinity }}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "100px",
          backgroundColor: "#9C9C9C",
          opacity: "0.9",
        }}
      >
        <p
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          채점 중..
        </p>
      </motion.div>
    </div>
  );
}

export default Loading;
