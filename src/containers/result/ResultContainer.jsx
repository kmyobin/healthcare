import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import ChartContainer from "./ChartContainer";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "bootstrap";

const Wrapper = styled.div`
  /*display: ${(props) => (props.isShow === true ? "flex" : "none")}; */
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
  return (
    <Wrapper>
      <Container
        style={{
          fontFamily: "seoulhangang",
          fontSize: "14px",
        }}
      >
        {/* 성적표 출력 */}
        <TableContainer />
        {/* 스탯 그래프 출력 */}
        <ChartContainer />
        <button className="button">공유하기</button>
        <button className="button">다시하기</button>
      </Container>
    </Wrapper>
  );
}

export default ResultContainer;
