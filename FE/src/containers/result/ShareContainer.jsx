import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

function ShareContainer() {
  return (
    <FlexContainer>
      <h5>공유하기</h5>
      <GridContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </GridContainer>
    </FlexContainer>
  );
}

export default ShareContainer;
