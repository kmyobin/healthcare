import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "./Loading";
import Confirm from "./Confirm";

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

function FinishContainer(props) {
  const [ready, setReady] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 5000);
  });

  return (
    <Wrapper>
      <Container
        style={{
          fontFamily: "var(--font-seoulhangang",
        }}
      >
        {ready ? <Loading /> : <Confirm next={props.next} />}
      </Container>
    </Wrapper>
  );
}

export default FinishContainer;
