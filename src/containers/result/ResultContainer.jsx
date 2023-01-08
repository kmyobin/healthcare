import React from "react";
import styled from "styled-components";
import ChartContainer from "./ChartContainer";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
`;

function ResultContainer() {
  const navigate = useNavigate();
  var arr = [
    !isNaN(parseInt(sessionStorage.getItem("eat")))
      ? parseInt(sessionStorage.getItem("eat"))
      : 0,
    !isNaN(parseInt(sessionStorage.getItem("life")))
      ? parseInt(sessionStorage.getItem("life"))
      : 0,
    !isNaN(parseInt(sessionStorage.getItem("safe")))
      ? parseInt(sessionStorage.getItem("safe"))
      : 0,
    !isNaN(parseInt(sessionStorage.getItem("drunk")))
      ? parseInt(sessionStorage.getItem("drunk"))
      : 0,
    !isNaN(parseInt(sessionStorage.getItem("internet")))
      ? parseInt(sessionStorage.getItem("internet"))
      : 0,
  ];

  var grades = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 89) {
      grades[i] = 1;
    } else if (arr[i] >= 60) {
      grades[i] = 2;
    } else if (arr[i] >= 23) {
      grades[i] = 3;
    } else if (arr[i] >= 4) {
      grades[i] = 4;
    } else {
      grades[i] = 5;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Wrapper>
        <Container
          style={{
            fontFamily: "seoulhangang",
            fontSize: "14px",
          }}
        >
          {/* 성적표 출력 */}
          <TableContainer data={arr} grades={grades} />
          {/* 스탯 그래프 출력 */}
          <ChartContainer data={arr} />

          {/* 버튼 */}
          {/*<ShareContainer />*/}

          <br />
          <br />
          <button
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            다시하기
          </button>
        </Container>
      </Wrapper>
    </motion.div>
  );
}

export default ResultContainer;
