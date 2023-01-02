import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

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

function FinishContainer(props) {
  const navigate=useNavigate();

  const onClickResultBtn = () =>{
    navigate(props.next);
  }

  return (
    <Wrapper >
      <Container style={{
        fontFamily: 'var(--font-seoulhangang',
      }}>
        테스트 완료!            
      <br/> <br />
      <button className="button" onClick={onClickResultBtn}>
        결과 확인하기✅
      </button>
      </Container>
    </Wrapper >
  )
}

export default FinishContainer
