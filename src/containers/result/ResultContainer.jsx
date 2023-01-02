import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  /*display: ${props => props.isShow === true ? 'flex' : 'none'}; */
  width:100%;
  height:100vh;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const Container = styled.div`
    margin-bottom:3rem;
    text-align:center;
    align-items:center;
`

function ResultContainer() {
  return (
    <Wrapper >
      <Container style={{
        fontFamily: 'var(--font-seoulhangang',
      }}>
      결과 화면
      </Container>
    </Wrapper >
  )
}

export default ResultContainer
